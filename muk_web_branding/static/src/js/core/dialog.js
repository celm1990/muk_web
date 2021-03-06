/**********************************************************************************
* 
*    Copyright (C) 2017 MuK IT GmbH
*
*    This program is free software: you can redistribute it and/or modify
*    it under the terms of the GNU Affero General Public License as
*    published by the Free Software Foundation, either version 3 of the
*    License, or (at your option) any later version.
*
*    This program is distributed in the hope that it will be useful,
*    but WITHOUT ANY WARRANTY; without even the implied warranty of
*    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
*    GNU Affero General Public License for more details.
*
*    You should have received a copy of the GNU Affero General Public License
*    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*
**********************************************************************************/

odoo.define('muk_web_branding.dialog', function (require) {
"use strict";

var core = require('web.core');
var session = require('web.session');

var Dialog = require('web.Dialog');

var _t = core._t;
var QWeb = core.qweb;

Dialog.include({
    init: function(parent, options) {
        this._super(parent, this._debrandOptions(options || {}));
    },
    _debrandOptions: function(options) {
    	if (options.title && options.title.replace){
            options.title = options.title.replace(/Odoo/ig, session.muk_branding_system_name);
        } else {
            options.title = session.muk_branding_system_name;
        }
        if (options.$content){
            if (!(options.$content instanceof $)){
                options.$content = $(options.$content);
            }
            var content_html = options.$content.html();
            content_html = content_html.replace(/Odoo.com/ig, session.muk_branding_website);
            content_html = content_html.replace(/Odoo/ig, session.muk_branding_system_name);
            options.$content.html(content_html);
        }
        return options;
    }
});

});