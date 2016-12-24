package org.stone.config;

import org.stone.admin.action.*;

import com.jfinal.config.Routes;

/**
 * @Description: Route
 * @author Stone shentong33@hotmail.com
 * @date 2016年4月17日 下午12:47:58
 */
public class RoutesAdmin extends Routes {

	public void config() {
		add("/",IndexAction.class);
		add("admin",IndexAction.class);
		add("login", LoginAction.class);
		add("table-font-list", TableAction.class);
		add("table-images-list", TableAction2.class);
		add("form-news", FormAction.class);
		add("form-news-list", FormListAction.class);
		add("form-line1", FormLine1Action.class);
		add("form-line2", FormLine2Action.class);
	}
}
