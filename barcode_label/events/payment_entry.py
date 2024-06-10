import frappe
import json
from frappe.utils import nowdate
from erpnext.accounts.doctype.payment_entry.test_payment_entry import create_payment_entry

@frappe.whitelist()
def create_pe(doc):
    doc=json.loads(doc)
    barcode_label_settings = frappe.get_doc('Barcode Label Settings')
    doc_pe=create_payment_entry(
			company=doc['company'] or "_Test Company",
			payment_type="Receive",
			party_type="Customer",
			party=doc['customer'],
			paid_from=barcode_label_settings.account_paid_from,
			paid_to=barcode_label_settings.account_paid_to,
			paid_amount=doc['outstanding_amount'],
		)
    doc_pe.append('references',{
        'reference_doctype':'Sales Invoice',
        'reference_name': doc['name'],
        "allocated_amount":doc['outstanding_amount']
    })
    doc_pe.mode_of_payment=barcode_label_settings.default_mode_of_payment,
    doc_pe.insert()
    return doc_pe.name