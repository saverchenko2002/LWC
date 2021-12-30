public with sharing class ContactListController {
    @AuraEnabled
    public static List<Contact> getContactList(String accountId){
        return [select Id, Name, Email, Phone from Contact Where Email != null and AccountId=:accountId];
    }

    @AuraEnabled
    public static Contact createContact(Contact contact, Id accountId){
        contact.AccountId = accountId;
        insert contact;
        return contact;
    }
}
