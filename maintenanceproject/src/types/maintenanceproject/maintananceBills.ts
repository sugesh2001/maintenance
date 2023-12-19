
export interface maintananceBills{
	creation: string
	name: string
	modified: string
	owner: string
	modified_by: string
	docstatus: 0 | 1 | 2
	parent?: string
	parentfield?: string
	parenttype?: string
	idx?: number
	/**	Employee ID : Data	*/
	employee_id?: string
	/**	Bill nos : Data	*/
	bill_nos?: string
	/**	Request ID : Data	*/
	request_id?: string
	/**	Employee Coins Available : Data	*/
	employee_coins_available?: string
	/**	Lead Coins available : Data	*/
	lead_coins_available?: string
	/**	Amount Payable : Data	*/
	amount_payable?: string
	/**	Amount Paid : Data	*/
	amount_paid?: string
	/**	Balance : Data	*/
	balance?: string
	/**	Payment Type : Data	*/
	payment_type?: string
	/**	Payment status : Data	*/
	payment_status?: string
	/**	Date(billed) : Attach	*/
	datebilled?: string
	/**	Reports to : Data	*/
	reports_to?: string
	/**	Request Type : Data	*/
	request_type?: string
	/**	Duration : Data	*/
	duration?: string
	/**	Coins Consumed : Data	*/
	coins_consumed?: string
	/**	Bill  : Attach	*/
	bill?: string
	/**	Remarks : Data	*/
	remarks?: string
	/**	no of worker assigned : Data	*/
	no_of_worker_assigned?: string
	/**	Prepaid : Data	*/
	prepaid?: string
	/**	Postpaid : Data	*/
	postpaid?: string
}