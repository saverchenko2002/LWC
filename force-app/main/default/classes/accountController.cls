public with sharing class accountController {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountList() {
        return [select Id, Name, AnnualRevenue from Account where AnnualRevenue != null  LIMIT 5];
    }

    @AuraEnabled(cacheable=true)
    public static Account getAccountById(Id accId){
        return [select Id, Name, Phone from Account where Id = :accId limit 1];
    }

    @AuraEnabled(cacheable=true)
    public static List<Contact> getContactList(){
        return [select Id, Name from Contact];
    }
}
