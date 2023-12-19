
export interface RequestDetails{
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
	/**	Request Type : Data	*/
	request_type?: string
	/**	RequestSub Type : Data	*/
	requestsub_type?: string
	/**	part nos : Data	*/
	part_nos?: string
	/**	Category : Data	*/
	category?: string
	/**	Purposes : Data	*/
	purposes?: string
	/**	Location : Data	*/
	location?: string
	/**	Photo : Attach	*/
	photo?: string
	/**	User Priority : Data	*/
	user_priority?: string
	/**	Lead Priority : Data	*/
	lead_priority?: string
	/**	Manager Priority : Data	*/
	manager_priority?: string
	/**	Remarks : Data	*/
	remarks?: string
	/**	Request Status(update) : Data	*/
	request_statusupdate?: string
	/**	user Name : Data	*/
	user_name?: string
	/**	Internal : Data	*/
	internal?: string
	/**	External : Data	*/
	external?: string
	/**	Start Date : Data	*/
	start_date?: string
	/**	Start Time : Data	*/
	start_time?: string
	/**	End Date : Data	*/
	end_date?: string
	/**	End Time : Data	*/
	end_time?: string
	/**	No of workers assigned : Data	*/
	no_of_workers_assigned?: string
	/**	Worker name  : Data	*/
	worker_name?: string
	/**	Reporting manager Email : Data	*/
	reporting_manager_email?: string
	/**	vendar details : Data	*/
	vendar_details?: string
}