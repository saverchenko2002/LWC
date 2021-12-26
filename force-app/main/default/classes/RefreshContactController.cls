public with sharing class RefreshContactController {
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContactList() {
        return [select Id, Firstname,LastName, Email from Contact limit 10];
    }
}
