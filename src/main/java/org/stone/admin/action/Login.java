package org.stone.admin.action;

import org.stone.basic.BaseAction;

/**
 * Created by Stone on 2016/12/23.
 */
public class Login extends BaseAction{

    @Override
    public void index() {
        render("/admin/login.html");
    }
}
