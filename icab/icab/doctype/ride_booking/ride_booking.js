// Copyright (c) 2024, Intelion and contributors
// For license information, please see license.txt

frappe.ui.form.on("Ride Booking", {
	refresh(frm) {
        if (frm.doc.status === "New") {
            frm.add_custom_button("Accept", () => {
                // frm.set_value("status", "Accepted");
                frappe.prompt('Driver', ({value}) => {
                    frappe.new_doc("Ride Invoice", {
                        "booking": frm.doc.name,
                        "driver": value
                    })
                })
                frm.save();
            }, "Actions")
            // add_accept_button(frm)
    
    
            frm.add_custom_button("Reject", () => {
                frm.set_value("status", "Rejected");
                frm.save();
            }, "Actions")
        }
	},  
})


// function add_accept_button(frm) {
//     frm.add_custom_button(__("Accept"), ()=> {
//         const driver_dialog = new frappe.ui.Dialog({
//             fields: [
//                {
//                     fieldname: "driver",
//                     label: __("Driver"),
//                     fieldtype: "Link",
//                     options: get_driver_options(), // Replace with your function to get drivers
//                }
//             ],
//             title: __("Select Driver"),
//             primary_action: (values) => {
//                 if (values.driver) {
//                 frm.save() // Assuming you want to save before creating invoice
//                     .then(() => {
//                     let new_invoice = frappe.new_doc("Ride Invoice");
//                     new_invoice.booking = frm.doc.name;
//                     new_invoice.driver = values.driver;
//                     new_invoice.save()
//                         .then(() => frm.refresh())
//                         .catch((err) => frappe.msg.error(err.message));
//                     })
//                     .catch((err) => frappe.msg.error(err.message));
//                 } else {
//                 frappe.msg.error(__("Please select a driver"));
//                 }
//             }
//         });
//         driver_dialog.show();
//     },  __("Actions"));
// }

// function get_driver_options() {
//     // Replace this with your logic to fetch or define driver options
//     // This is an example of a static list
//     return [
//       { value: "driver1@example.com", label: "Driver 1" },
//       { value: "driver2@example.com", label: "Driver 2" },
//     ];
//   }