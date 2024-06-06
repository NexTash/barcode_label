frappe.ui.form.on('Payment Entry', {
    refresh: function(frm, dt, dn) {
        let barcode = '<svg height="88px" width="100%" x="0px" y="0px" viewBox="0 0 719 88" xmlns="http://www.w3.org/2000/svg" version="1.1" style="transform: translate(0,0)" data-barcode-value="ACC-SINV-2024-00001"><rect x="0" y="0" width="719" height="88" style="fill:#ffffff;"></rect><g transform="translate(10, 10)" style="fill:#000000;"><rect x="0" y="0" width="6" height="50"></rect><rect x="9" y="0" width="3" height="50"></rect><rect x="18" y="0" width="3" height="50"></rect><rect x="33" y="0" width="3" height="50"></rect><rect x="39" y="0" width="3" height="50"></rect><rect x="51" y="0" width="6" height="50"></rect><rect x="66" y="0" width="3" height="50"></rect><rect x="78" y="0" width="3" height="50"></rect><rect x="90" y="0" width="6" height="50"></rect><rect x="99" y="0" width="3" height="50"></rect><rect x="111" y="0" width="3" height="50"></rect><rect x="123" y="0" width="6" height="50"></rect><rect x="132" y="0" width="3" height="50"></rect><rect x="141" y="0" width="6" height="50"></rect><rect x="150" y="0" width="9" height="50"></rect><rect x="165" y="0" width="6" height="50"></rect><rect x="174" y="0" width="9" height="50"></rect><rect x="186" y="0" width="3" height="50"></rect><rect x="198" y="0" width="6" height="50"></rect><rect x="213" y="0" width="3" height="50"></rect><rect x="225" y="0" width="3" height="50"></rect><rect x="231" y="0" width="3" height="50"></rect><rect x="237" y="0" width="9" height="50"></rect><rect x="255" y="0" width="6" height="50"></rect><rect x="264" y="0" width="9" height="50"></rect><rect x="276" y="0" width="3" height="50"></rect><rect x="282" y="0" width="6" height="50"></rect><rect x="297" y="0" width="3" height="50"></rect><rect x="306" y="0" width="6" height="50"></rect><rect x="315" y="0" width="9" height="50"></rect><rect x="330" y="0" width="3" height="50"></rect><rect x="336" y="0" width="9" height="50"></rect><rect x="348" y="0" width="12" height="50"></rect><rect x="363" y="0" width="6" height="50"></rect><rect x="375" y="0" width="3" height="50"></rect><rect x="384" y="0" width="9" height="50"></rect><rect x="396" y="0" width="9" height="50"></rect><rect x="408" y="0" width="3" height="50"></rect><rect x="417" y="0" width="6" height="50"></rect><rect x="429" y="0" width="9" height="50"></rect><rect x="441" y="0" width="3" height="50"></rect><rect x="447" y="0" width="12" height="50"></rect><rect x="462" y="0" width="3" height="50"></rect><rect x="471" y="0" width="6" height="50"></rect><rect x="480" y="0" width="9" height="50"></rect><rect x="495" y="0" width="3" height="50"></rect><rect x="504" y="0" width="9" height="50"></rect><rect x="516" y="0" width="6" height="50"></rect><rect x="528" y="0" width="3" height="50"></rect><rect x="534" y="0" width="9" height="50"></rect><rect x="546" y="0" width="12" height="50"></rect><rect x="561" y="0" width="6" height="50"></rect><rect x="570" y="0" width="6" height="50"></rect><rect x="582" y="0" width="6" height="50"></rect><rect x="594" y="0" width="3" height="50"></rect><rect x="603" y="0" width="3" height="50"></rect><rect x="615" y="0" width="6" height="50"></rect><rect x="627" y="0" width="3" height="50"></rect><rect x="633" y="0" width="3" height="50"></rect><rect x="645" y="0" width="6" height="50"></rect><rect x="660" y="0" width="6" height="50"></rect><rect x="675" y="0" width="9" height="50"></rect><rect x="687" y="0" width="3" height="50"></rect><rect x="693" y="0" width="6" height="50"></rect><text style="font: 16px monospace" text-anchor="middle" x="349.5" y="68">ACC-SINV-2024-00001</text></g></svg>'
        let barcode_id_text = $(barcode).data("barcode-value")
        frm.set_value("custom_scan_barcode", barcode_id_text)

        frappe.db.get_doc('Sales Invoice', barcode_id_text)
        .then(doc => {
            console.log(doc)
        })
    }
});