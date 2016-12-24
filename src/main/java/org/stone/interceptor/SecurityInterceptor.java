package org.stone.interceptor;

import com.jfinal.aop.Interceptor;
import com.jfinal.aop.Invocation;

/** 
 * @Description: Shiro Security Interceptor
 * @author Stone shentong33@hotmail.com   
 * @date 2016年4月26日 上午10:09:55 
 */
public class SecurityInterceptor implements Interceptor {

	@Override
	public void intercept(Invocation inv) {
		inv.invoke();
	}
}