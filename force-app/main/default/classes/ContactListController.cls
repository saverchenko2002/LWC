public with sharing class ContactListController {
    @AuraEnabled
    public static List<Contact> getContactList(){
        return [select Id, Name, Email, Phone from Contact Where Email != null];
    }
}
