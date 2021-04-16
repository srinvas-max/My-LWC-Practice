public with sharing class contactAuraService {
    public contactAuraService() {

    }
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContactList(String name){
        String key='%'+name+'%';
        String query='select name,phone,Email from contact where Name LIKE:key';
        return Database.Query(query);
    }
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountList(String name){
        string key='%'+name+'%';
        String query='select Id,Name, Industry from Account where Name Like:key';
        return Database.Query(query);
       
    }
}