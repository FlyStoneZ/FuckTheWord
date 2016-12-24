package org.stone.basic;

import java.util.List;
import java.util.UUID;

import org.apache.commons.lang3.StringUtils;
import org.stone.utils.DataUtils;

import com.jfinal.plugin.activerecord.Config;
import com.jfinal.plugin.activerecord.Db;
import com.jfinal.plugin.activerecord.DbKit;
import com.jfinal.plugin.activerecord.Model;
import com.jfinal.plugin.c3p0.C3p0Plugin;

/**
 * @Description: BaseService
 * @author Stone shentong33@hotmail.com
 * @date 2016年5月16日 下午2:12:12
 */
public class BaseService extends Db {
	
	/**
	 * Default no-arg constructor
	 */
	public BaseService() {
		use("main");
	}
	
	/**
	 * constructor by dataSourceName
	 * 
	 * @param dataSourceName
	 */
	public BaseService(String dataSourceName) {
		use(dataSourceName);
	}

	/**
	 * init service by args
	 * 
	 * @param jdbcUrl
	 * @param user
	 * @param password
	 */
	public BaseService(String jdbcUrl, String user, String password) {
		new BaseService(UUID.randomUUID().toString(),jdbcUrl,user,password);
	}
	
	/**
	 * init service and specified dsName
	 * 
	 * @param dsName
	 * @param jdbcUrl
	 * @param user
	 * @param password
	 */
	public BaseService(String dsName, String jdbcUrl, String user, String password) {
		if (StringUtils.isBlank(dsName) || StringUtils.isBlank(jdbcUrl) || StringUtils.isBlank(user) || StringUtils.isBlank(password))
			throw new RuntimeException("invalid args, it is must be not null");
		C3p0Plugin c3p0Plugin = new C3p0Plugin(jdbcUrl, user, password);
		Config config = new Config(UUID.randomUUID().toString(), c3p0Plugin.getDataSource());
		DbKit.addConfig(config);
	}
	
	
	/*******************************************************
	 ***************  make a simple SQL kit  ***************  
	 *******************************************************/        
	public <T extends Model<T>> List<T> selectAll(Class<? extends Model<T>> t){
		return selectCheck(t,null);
	}
	
	public <T extends Model<T>> List<T> selectColumns(Class<? extends Model<T>> t, String... column){
		return selectCheck(t,null,column);
	}
	
	public <T extends Model<T>> List<T> selectCondition(Class<? extends Model<T>> t, String condition){
		return selectCheck(t,condition);
	}	
	
	public <T extends Model<T>> List<T> selectCheck(Class<? extends Model<T>> t, String condition, String... column){
		return DataUtils.getDaoObject(t).find(DataUtils.buildSQL(t, column, condition));
	}	
}
