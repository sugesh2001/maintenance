
export interface maintananceCoinassigning{
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
	/**	Total Coin Available : Data	*/
	total_coin_available?: string
	/**	Coins Assigned : Data	*/
	coins_assigned?: string
	/**	Assigned Date : Data	*/
	assigned_date?: string
	/**	Reporting Manager email : Data	*/
	reporting_manager_email?: string
}