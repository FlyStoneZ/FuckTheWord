package org.stone.config;

import com.jfinal.config.*;
import com.jfinal.plugin.activerecord.ActiveRecordPlugin;
import com.jfinal.plugin.c3p0.C3p0Plugin;
import com.jfinal.render.ViewType;
import org.beetl.core.GroupTemplate;
import org.beetl.ext.jfinal.BeetlRenderFactory;
import org.stone.common.tag.TestTag;
import org.stone.interceptor.SecurityInterceptor;
import org.stone.model.MappingKit;

/**
 * @Description: projects init config
 * @author Stone shentong33@hotmail.com
 * @date 2016年4月17日 上午10:52:44
 */
public class ProjectConfig extends JFinalConfig {
	
	/**	
	 * step.1
	 * @Description: Constant
	 * @param cons
	 */
	@Override
	public void configConstant(Constants cons) {
		loadPropertyFile("config.properties");
		cons.setDevMode(true);
		// cons.setBaseViewPath("/WEB-INF/page");
		cons.setViewType(ViewType.OTHER);
		cons.setEncoding("utf-8");
		cons.setError404View("error/404.html");
		cons.setMainRenderFactory(new BeetlRenderFactory());
		GroupTemplate gt = BeetlRenderFactory.groupTemplate;
		gt.registerTag("test", TestTag.class);
	}

	/**	
	 * step.2
	 * @Description: Route
	 * @param rt
	 */
	@Override
	public void configRoute(Routes rt) {
		rt.add(new RoutesAdmin());
	}
	
	/** 
	 * step.3
	 * @Description: Plugin
	 * @param plugin
	 */
	@Override
	public void configPlugin(Plugins plugin) {
		C3p0Plugin c3p0Plugin = new C3p0Plugin(prop.get("database.url"), prop.get("database.user"), prop.get("database.password"),prop.get("database.driver"));
		ActiveRecordPlugin arp = new ActiveRecordPlugin(c3p0Plugin);
		plugin.add(c3p0Plugin);
		plugin.add(arp);
		MappingKit.mapping(arp);
	}
	
	/**	
	 * step.4
	 * @Description: Interceptor
	 * @param inter
	 */
	@Override
	public void configInterceptor(Interceptors inter) {
		inter.add(new SecurityInterceptor());
	}
	
	/**	
	 * step.5
	 * @Description: Handler load no.5
	 * @param handler
	 */
	@Override
	public void configHandler(Handlers handler) {}
}
