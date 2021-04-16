public with sharing class testUtility {
    public testUtility() {
    }
    @AuraEnabled
    public static Map<Integer,String> mapDemo(){
        Map<Integer,String> testMap=new Map<Integer,String>();
        testMap.put(1,'arjun');
        testMap.put(2,'aryan');
        testMap.put(3,'arvind');
        testMap.put(4,'anurag');
        return testMap;
    }
}