// Copyright (c) 2024, Intelion and contributors
// For license information, please see license.txt


frappe.ui.form.on("Ride Invoice", {
    rate_per_km(frm, cdt, cdn) {
        let total_distance = 0;
        for(let item of frm.doc.items) {
            total_distance += item.distance;
        }

        frm.set_value("total_amount", total_distance * frm.doc.rate_per_km);
	},
});

frappe.ui.form.on("Ride Invoice Item", {
	distance(frm, cdt, cdn) {
        let total_distance = 0;
        for(let item of frm.doc.items) {
            total_distance += item.distance;
        }

        frm.set_value("total_amount", total_distance * frm.doc.rate_per_km);
	},
});
