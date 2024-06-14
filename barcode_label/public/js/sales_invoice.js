frappe.ui.form.on('Sales Invoice', {
    before_submit: function(frm, dt, dn) {
        frm.set_value("custom_barcode", frm.doc.name)
    },
    refresh:function(frm,dt,dn){
        if(frm.doc.docstatus==1){
            frm.add_custom_button('Print Invoice Barcode', () => {
                const print_format = 'Barcode Label';  // Replace with the name of your custom print format
                const letter_head = 0;  // Set to 1 if you want to include the letterhead
            
                // Trigger the print
                // frappe.utils.print_format(frm.doctype, frm.docname, print_format, with_letterhead);
                
                const url = frappe.urllib.get_base_url() + "/printview?doctype=Sales%20Invoice&name=" + frm.doc.name + "&trigger_print=1&format=" + print_format + "&no_letterhead=" + letter_head;
                const printWindow = window.open(url, "Print");
                printWindow.addEventListener("load", function() {
                printWindow.print();
                }, true);
            })
        }
        
    }
});
// http://127.0.0.1:8001/printview?doctype=Sales%20Invoice&name=ACC-SINV-2024-00007&trigger_print
// =1&format=Barcode%20Label&no_letterhead=1&letterhead=No%20Letterhead&settings=%7B%7D&_lang=en