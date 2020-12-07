package java_code;

import java.lang.reflect.Constructor;

public class Test {
    public static void main(String[] args) {
        try{
            Constructor test001_cc = Test001.class.getDeclaredConstructors()[0];
            test001_cc.setAccessible(true);
            Test001 test001 = (Test001) test001_cc.newInstance();
            Object object = getInnerInstance(test001);
            //Class.forName("java_code.Test001").newInstance();
            //Test001.class.getDeclaredConstructor().newInstance();
        } catch (Exception e){
            e.printStackTrace(); 
        }
    }

    private static Object getInnerInstance(Test001 test001) {
        Object object = null;
        try {
            Class[] innnerClass = test001.getClass().getDeclaredClasses();
            for (Class c: innnerClass){
                
                if (c.getName().indexOf("Test001001") != -1){
                    //Constructor cc = c.getConstructors()[0];
                    Constructor cc = c.getConstructor(test001.getClass(), String.class);
                    object = cc.newInstance(test001, "欢迎关注我的微信公众号:无情剑客");
                } else if (c.getName().indexOf("Test001002") != -1){
                    Constructor cc = c.getConstructor(test001.getClass());
                    object = cc.newInstance(test001);
                } else {
                    Constructor cc = c.getConstructor();
                    object = cc.newInstance();
                }         
            }
            return object;
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }
}
