import React from 'react';
import '../PageStyles.css';

const FeeStructure = () => {
  return (
    <div className="page-content">
      <div className="container">
        <h1 className="page-title">Fee Structure</h1>
        
        <div className="page-section">
          <h2 className="section-subtitle">Tuition Fee and Other Fee</h2>
          
          <h3>Transfer Fee</h3>
          <p>
            Sr. 500/- per child will be charged if the child is transferred from other International Indian School (CBSE Affiliated) in the Kingdom of Saudi Arabia under the aegis of Embassy of India. This schools are IIS Riyadh, IIS Jeddah, IIS Jubail, IIS Taif, IIS Tabuk, IIS Buraidah, IIS Majmaah, IIPS Riyadh and IIS Dammam.
          </p>
          
          <h3>Admission Fee</h3>
          <table className="fee-table">
            <tbody>
              <tr>
                <td>Indians</td>
                <td>Sr.1500/-</td>
              </tr>
              <tr>
                <td>Non-Indians</td>
                <td>Sr.1750/-</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="page-section">
          <h3>Tuition Fee</h3>
          <p>The tuition fee must be paid before 20th of every month.</p>
          
          <table className="fee-table full-width">
            <thead>
              <tr>
                <th>Class</th>
                <th>Indian</th>
                <th>Non-Indian</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>LKG & UKG</td>
                <td>Sr.250/-</td>
                <td>Sr.350/-</td>
              </tr>
              <tr>
                <td>I to V</td>
                <td>Sr.275/-</td>
                <td>Sr.375/-</td>
              </tr>
              <tr>
                <td>VI to VIII</td>
                <td>Sr.300/-</td>
                <td>Sr.400/-</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="page-section">
          <h3>Annual Fees (For all Students)</h3>
          <p>
            Annual fee for library, Sports, Co-Curricular activities will be charged in the month of April every year as per the following rate:
          </p>
          <ul className="fee-list">
            <li>For classes LKG & UKG - Sr. 250/-</li>
            <li>For classes I & II - Sr. 275/-</li>
            <li>For classes III & IV - Sr. 350/-</li>
            <li>For classes V to VIII - Sr. 400/-</li>
          </ul>
        </div>
        
        <div className="page-section">
          <h3>Other Miscellaneous Fee</h3>
          <table className="fee-table full-width">
            <thead>
              <tr>
                <th>Item</th>
                <th>Fee</th>
                <th>Remarks</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Registration Fee (Non refundable)</td>
                <td>Sr.100.00</td>
                <td>Payable at the time of Registration</td>
              </tr>
              <tr>
                <td>Admission test fee</td>
                <td>Sr.100.00</td>
                <td>Per student</td>
              </tr>
              <tr>
                <td>Duplicate TC</td>
                <td>Sr. 50.00</td>
                <td>Per Copy</td>
              </tr>
              <tr>
                <td>Report Card (duplicate)</td>
                <td>Sr. 50.00</td>
                <td>Per Card</td>
              </tr>
              <tr>
                <td>Bonafide Certificate</td>
                <td>Sr. 10.00</td>
                <td>Per Certificate</td>
              </tr>
              <tr>
                <td>Replacement of ID Card</td>
                <td>Sr.10.00</td>
                <td>Per Card</td>
              </tr>
              <tr>
                <td>Cancellation of TC</td>
                <td>Sr. 100.00</td>
                <td>Within one month (after that readmission rule will apply)</td>
              </tr>
            </tbody>
          </table>
          
          <p className="note">
            The School Management Committee reserves the right to revise the fee structure at any time based on the local needs and circumstances.
          </p>
        </div>
        
        <div className="page-section">
          <h2 className="section-subtitle">Guidelines for Payment of Tuition Fee</h2>
          <ol className="guidelines-list">
            <li>The academic year is divided into three (3) terms i.e. April to July (4 months), August to November (4 months) and December to March (4 months)</li>
            <li>In case of late admission, the tuition fee is payable from the beginning of the academic year i.e. April. The relaxation for payment of tution fee for the first term may be considered in case the family arrived in the kingdom on new family visa on or after 01 June. In case the parent insists to admit his ward in June / July itself, the tuition fee is to be paid from April.</li>
            <li>The tuition fee is to be paid on or before 20th of every month. If school dues are not cleared till 20th of stipulated month, SAR.1/-per day will be charged towards the tuition fee for the due month after the last date of payment (up to the end of due month). If continuous two months dues are not cleared then the name of the pupil will be struck off from the class roll. Parents would then be required SAR.500/- as readmission charges. If 20th of the month happens to be a holiday for the cash office of the school, the fee will be collected without late fee on the next working day.</li>
            <li>Parent has to pay July and March fees in advance along with the current month.
              <ul>
                <li>July fee along with June</li>
                <li>March fee along with February</li>
                <li>August fee will be collected along with September fee without late fine.</li>
              </ul>
            </li>
            <li>All the students of Class KG to VIII must clear their fees up to March (including March) on or before the 20th February</li>
            <li>Parents proceeding on annual leave are advised to pay the school fee in advance or make arrangement for regular timely payment of the fee to avoid late fee / removal of the child's name from class register.</li>
            <li>Fee can be paid in advance at the school cash counter. Fee once paid will not be refunded under the normal circumstances even if the child did not attend the class.</li>
            <li>Non-payment of fee for two (2) consecutive months will result in the removal of the name from the class register. Once the name of the child is removed from the class register, the name will be reinstated on payment of readmission fee as per school rules and upon availability of seats.</li>
          </ol>
          
          <p className="note">
            ATM facility is not available for fee payment.
          </p>
        </div>
        
        <div className="page-section">
          <h2 className="section-subtitle">Re-Admission</h2>
          <p>
            Re-admission Fee is SR 500.00. Re-admission is not guaranteed in all cases. The name of the student will be deleted from the school rolls on non-payment of fee for two (2) months. Re-admission in such cases shall be granted subject to the following conditions:
          </p>
          <ol className="readmission-list">
            <li>In the 3rd month (in cases of non-payment of fee for two consecutive months), readmission fee will be SR 500/-</li>
            <li>To be re-admitted in the same academic year, the student will have to pay the tuition fees from the following month of the last paid month along with the readmission fees of SR. 500/- Those who had left the school without taking the TC and seeking readmission should clear the previous dues, if any.</li>
          </ol>
          
          <p>
            If a student takes TC from the school and seeks re-admission in the same academic year, without having joined elsewhere, readmission will be granted only if he/she has the required attendance for the academic year as per school rules and on the basis of availability of seats.
          </p>
          <p className="important-note">
            Unapproved leave for more than 3 months will result in the cancellation of admission.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeeStructure;