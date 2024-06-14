// Copyright (c) 2024, nextash and contributors
// For license information, please see license.txt

frappe.ui.form.on('Barcode Label Settings', {
	setup:function(frm,dt,dn){
		frm.set_query('account_paid_from', () => {
			return {
				filters: {
					"account_type": 'Receivable',
					"is_group":0,

				}
			}
		})
		frm.set_query('account_paid_to', () => {
			return {
				filters: {
					"account_type":['in',['Bank','Cash']] ,
					"is_group":0,
					
				}
			}
		})
	}
});
