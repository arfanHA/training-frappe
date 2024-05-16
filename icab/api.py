import frappe

@frappe.whitelist()
def get_money():
    return "100000"