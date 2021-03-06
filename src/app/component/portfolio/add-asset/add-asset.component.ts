import { Component, OnInit, Input }      from '@angular/core'
import { NavbarService }          from '../../../service/navbar.service'
import { SidebarService }         from '../../../service/sidebar.service'
import { UserService }            from '../../../service/user.service'
import { AuthenticationService }  from '../../../service/authentication.service'
import { transaction }            from '../../../model/transactions';
import { asset }                  from '../../../model/asset';
import { AssetService }           from '../../../service/asset.service';
import { TransactionsService }    from '../../../service/transaction.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import { User }                   from '../../../model/user'

@Component({
  selector: 'app-add-asset',
  templateUrl: './add-asset.component.html',
  styleUrls: ['./add-asset.component.css']
})
export class AddAssetComponent implements OnInit {
  @Input() public username;
  @Input() public symbol;
  @Input() public passedInShares;
  @Input() public portfolioId;
  @Input() public currencyType;

  Transaction   = new transaction();
  submitted     = false;
  shareCount:     string;
  stringUsername: string;
  stringSymbol: string;
  newtrans: boolean = true;
  
  constructor(
    public nav: NavbarService, 
    public sidebar: SidebarService, 
    private authService: AuthenticationService, 
    private userService: UserService,
    private assetService: AssetService,
    private transactionService: TransactionsService,
    private location: Location,
    private route: ActivatedRoute ) 
    { 
      this.nav.show();
      this.sidebar.show();  
    }

   ngOnInit()
   {
     //initialize new transaction
      this.Transaction = new transaction();
       this.stringUsername = this.username.toString();
       //if this transaction is a trade on a current asset display the current share amount
       if ( this.passedInShares ){ 
         this.shareCount = "You currently have this many shares : "+this.passedInShares;
         this.newtrans = false;
       }
       //if theres a passed in symbol set the symbol
       if (this.symbol != null)
       {
         this.stringSymbol = this.symbol.toString();
         this.Transaction.symbol = this.stringSymbol;
         this.newtrans = false;
       }
       if (this.currencyType){
         this.Transaction.currency = this.currencyType;
       }
   }
 
   // new form, reset the state excep for the transaction state we will keep that the same
   newTransaction(): void {
     const saveTransaction = this.Transaction.transaction;
     //this.Transaction = new transaction();
     this.submitted = false;
   }

   //just reload the page to update
   back(): void{
     window.location.reload();
   }
   
   goBack(): void {
     this.location.back();
   }

   //this function adds the transaction to the database
   addTransaction() : void {
    this.submitted = true;
    //if the number of shares passed in are more than the shares owned by the user set the shares to the amount the user owns
    if (this.Transaction.shares > this.passedInShares && this.Transaction.transaction == false){
      this.Transaction.shares = this.passedInShares;
    }
    //call the service function to add to the db
    this.transactionService.addTransaction(this.Transaction, this.portfolioId).subscribe();
   }

}
