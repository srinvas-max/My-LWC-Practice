public with sharing class Aura_Example_4 {
    public Aura_Example_4() {

    }
@AuraEnabled(cacheable=true)
public static List<Account> getAccountList(){
    try {
        return[select Id, Name, Phone, Industry FROM Account LIMIT 100];

    } catch (Exception e) {
        throw new AuraHandledException(e.getMessage());
    }
}
    
}
