

export class WalletDto{


constructor(
  public id?:number,
  public name?:string,
  public balance?:number,
 public eMail?:string,
   public password?:string,
   public createdDate?:Date,
   public fundTransferPin?:number){}
//  Sample Data, copy and paste on Postman
//    {
//        "id":125567,
//            "name":"James",
//            "balance":"1200.0",
//            "eMail": "james@gmail.com",
//            "password": "James123",
//            "createdDate": "2023-02-23",
//            "fundTransferPin":1001
//    }
}
