
export interface employeemaintenancecoin{
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
	/**	Employee Name : Data	*/
	employee_name?: string
	/**	Reports to : Data	*/
	reports_to?: string
	/**	Coins Remaining : Data	*/
	coins_remaining?: string
	/**	coins consumed : Data	*/
	coins_consumed?: string
	/**	Coin alloted : Data	*/
	coin_alloted?: string
	/**	Reporting manager Email : Data	*/
	reporting_manager_email?: string
}