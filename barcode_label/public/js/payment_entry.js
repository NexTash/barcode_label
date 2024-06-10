frappe.ui.form.on('Payment Entry', {
    custom_scan_barcode: function(frm, dt, dn) {
        frappe.db.get_list('Sales Invoice', {
            fields: ['name','docstatus'],
            filters: {
                name: frm.doc.custom_scan_barcode
            }
        }).then(records => {
            console.log(records);
            if(records.length > 0){
                frappe.db.get_doc('Sales Invoice', frm.doc.custom_scan_barcode)
                    .then(doc => {
                        
                        console.log(doc)
                        frappe.call({
                            method: 'barcode_label.events.payment_entry.create_pe',
                            args: {
                                doc:doc 
                            },
                            freeze: true,
                            callback: (r) => {
                                console.log(r.message)
                                
                                frappe.set_route("Form", 'Payment Entry', r.message);
                            },
                            error: (r) => {
                                // on error
                            }
                        })
                    })
            }
        })
        
    }
});
