public with sharing class BeerSearchAuraService {
    @AuraEnabled
    public static List<SObject> searchBeer(String searchParam){
      String likeParam = '%' + searchParam + '%';
      String query = '';
      if (searchParam != null) {
        query = 'select Id, Name, Alcohol__c, brewery_id__c, brewery_Name__c, Image__c, Price__c, Remaining_Quantity__c, Tags__c, Total_Quantity__c, Id__c	from Beer__c where Name like :likeParam LIMIT 100';
      } else {
        query = 'select Id, Name, Alcohol__c, brewery_id__c, brewery_Name__c, Image__c, Price__c, Remaining_Quantity__c, Tags__c, Total_Quantity__c, Id__c	from Beer__c LIMIT 100';
      }
      List<SObject> sObjectList = Database.query(query);
      return sObjectList;
    }
}
