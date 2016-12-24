package org.stone.admin.action;

import org.stone.basic.BaseAction;
import org.stone.basic.BaseService;
import org.stone.model.Menus;

import java.util.List;

/** 
 * @Description: index page
 * @author Stone shentong33@hotmail.com   
 * @date 2016年4月17日 下午12:51:26 
 */
public class IndexAction extends BaseAction{
	
	private BaseService baseService = new BaseService();

	@Override
	public void index() {
		String para = super.getPara();
		List<Menus> selectAll = baseService.selectCondition(Menus.class, "order by orderNum desc");
		setAttr("menus", selectAll);
		render("/admin/index.html");
	}

	public void chart() {
		render("/admin/chart.html");
	}
}
