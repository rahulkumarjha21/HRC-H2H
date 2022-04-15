package com.pojo;
public class WinterInternship 
{
	private Double total_open_amount;
	private Long sl_no,cust_number,business_year,doc_id,posting_id,invoice_id;
	private String business_code,clear_date,posting_date,document_create_date,due_in_date,invoice_currency,document_type,baseline_create_date,cust_payment_terms;
	public WinterInternship()
	{
		
	}
	public WinterInternship(Long sl_no,String business_code,Long cust_number,String clear_date,Long business_year,Long doc_id,String posting_date,String document_create_date,String due_in_date,String invoice_currency,String document_type,Long posting_id,Double total_open_amount,String baseline_create_date,String cust_payment_terms,Long invoice_id)
	{
		this.sl_no=sl_no;
		this.business_code=business_code;
		this.cust_number=cust_number;
		this.clear_date=clear_date;
		this.business_year=business_year;
		this.doc_id=doc_id;
		this.posting_date=posting_date;
		this.document_create_date=document_create_date;
		this.due_in_date=due_in_date;
		this.invoice_currency=invoice_currency;
		this.document_type=document_type;
		this.posting_id=posting_id;
		this.total_open_amount=total_open_amount;
		this.baseline_create_date=baseline_create_date;
		this.cust_payment_terms=cust_payment_terms;
		this.invoice_id=invoice_id;
	}
	public Double getTotal_open_amount() {
		return total_open_amount;
	}
	public void setTotal_open_amount(Double total_open_amount) {
		this.total_open_amount = total_open_amount;
	}
	public Long getSl_no() {
		return sl_no;
	}
	public void setSl_no(Long sl_no) {
		this.sl_no = sl_no;
	}
	public Long getCust_number() {
		return cust_number;
	}
	public void setCust_number(Long cust_number) {
		this.cust_number = cust_number;
	}
	public Long getBusiness_year() {
		return business_year;
	}
	public void setBusiness_year(Long business_year) {
		this.business_year = business_year;
	}
	public Long getDoc_id() {
		return doc_id;
	}
	public void setDoc_id(Long doc_id) {
		this.doc_id = doc_id;
	}
	public Long getPosting_id() {
		return posting_id;
	}
	public void setPosting_id(Long posting_id) {
		this.posting_id = posting_id;
	}
	public Long getInvoice_id() {
		return invoice_id;
	}
	public void setInvoice_id(Long invoice_id) {
		this.invoice_id = invoice_id;
	}
	public String getBusiness_code() {
		return business_code;
	}
	public void setBusiness_code(String business_code) {
		this.business_code = business_code;
	}
	public String getClear_date() {
		return clear_date;
	}
	public void setClear_date(String clear_date) {
		this.clear_date = clear_date;
	}
	public String getPosting_date() {
		return posting_date;
	}
	public void setPosting_date(String posting_date) {
		this.posting_date = posting_date;
	}
	public String getDocument_create_date() {
		return document_create_date;
	}
	public void setDocument_create_date(String document_create_date) {
		this.document_create_date = document_create_date;
	}
	public String getDue_in_date() {
		return due_in_date;
	}
	public void setDue_in_date(String due_in_date) {
		this.due_in_date = due_in_date;
	}
	public String getInvoice_currency() {
		return invoice_currency;
	}
	public void setInvoice_currency(String invoice_currency) {
		this.invoice_currency = invoice_currency;
	}
	public String getDocument_type() {
		return document_type;
	}
	public void setDocument_type(String document_type) {
		this.document_type = document_type;
	}
	public String getBaseline_create_date() {
		return baseline_create_date;
	}
	public void setBaseline_create_date(String baseline_create_date) {
		this.baseline_create_date = baseline_create_date;
	}
	public String getCust_payment_terms() {
		return cust_payment_terms;
	}
	public void setCust_payment_terms(String cust_payment_terms) {
		this.cust_payment_terms = cust_payment_terms;
	}
}