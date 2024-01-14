import React from 'react'
import Navbar from '../../navbar/Navbar'
import Footer from '../../footer/Footer'
import { Link } from 'react-router-dom'
const Term = () => {
  return (
    <div>
      <Navbar/>
      
      <div className="text-white bg-blue-950 p-4  w-full">
        <div className="md:flex justify-between items-center md:mx-28">
            <div className='md:text-2xl font-bold hidden md:block'>Privacy Policy</div>
            <div className="text-white flex justify-between items-center space-x-4 text-center ">
              <button className='font-bold'>About Us</button>
              <Link to='/term' className='font-bold text-red-600'>Term & Conditions</Link>
              <Link to='/' className='font-bold'>Privacy Policy</Link>
            </div>
        </div>
      </div>
      
      <div className='pt-4'>
          <div className="mx-auto ">
                    <div className=" md:flex flex-nowrap max-w-scress-xl mx-auto justify-center max-w-7xl">
                    <div className="flex-1 bg-slate-50 text-indigo-950 text-sm flex flex-col border-solid border-2 mr-1 ml-2 p-3 ">
                        <a href="">Terms and conditions (based on ASAP & Wowfare & 2AZTRAVEL)</a>
                        <a href="">Travel documentation</a>
                        <a href="#Booking requirements">Booking requirements</a>
                        {/* <a href="#Children">Children</a> */}
                        <a href="#Sales">Sales</a>
                        <a href="#Free 24-hour fare hold">Free 24-hour fare hold</a>
                        <a href="#Processing">Processing</a>
                        <a href="#Taxes, charges, and fees">Taxes, charges, and fees</a>
                        <a href="#Departure information">Departure information</a>
                        <a href="#Advertised fare guarantee">Advertised fare guarantee</a>
                        
                    </div>
                    <div className=" flex-1 bg-slate-50 text-indigo-950 text-sm flex flex-col border-solid border-2 mr-1 ml-2 p-3">
                        <a href="#General rules and conditions">General rules and conditions</a>
                        <a href="#Suppliers: rules and restrictions">Suppliers: rules and restrictions</a>
                        <a href="#Fraud prevention measures">Fraud prevention measures</a>
                        <a href="#Itinerary information">Itinerary information</a>
                        <a href="#Collecting personal data">Collecting personal data</a>
                        <a href="#Change Of Aircraft En Route">Change Of Aircraft En Route</a>
                        <a href="#Travel Documents">Travel Documents</a>
                        <a href="#Disputes">Disputes</a>
                        <a href="#Procedure for Resolution of Disputes">Procedure for Resolution of Disputes</a>
                        <a href="#Credit Card Chargebacks">Credit Card Chargebacks</a>

                    </div>
                    <div className="flex-1 bg-slate-50 text-indigo-950 text-sm flex flex-col border-solid border-2 mr-2 ml-2 p-3">
                        <a href="#Covid-19 waiver of liabiity">Covid-19 waiver of liabiity</a>
                        <a href="#Ticketing policies">Ticketing policies</a>
                        <a href="#Flexible ticket">Flexible ticket</a>
                        <a href="#Limitation of liability">Limitation of liability</a>
                        <a href="#Force majeure">Force majeure</a>
                        <a href="#Terms of ues(base on 2vietnamvisa)">Terms of ues(base on 2vietnamvisa)</a>
                        <a href="#Payment">Payment</a>
                        <a href="#Term and conditions">Term and conditions</a>
                        <a href="#Privacy">Privacy</a>
                        <a href="#Entire agreement">Entire agreement</a>
                        <a href="#Contact us">Contact us</a>

                    </div>
                    </div>
              </div>

              <div id='content' className=' max-w-7xl mx-auto p-2' >
                <div className='bg-slate-50 mb-2 border-solid border-2 p-3'  id='Terms and conditions (based on ASAP & Wowfare & 2AZTRAVEL)'>
                    <div>
                        <h3>Terms and conditions (based on ASAP & Wowfare & 2AZTRAVEL)</h3>
                    </div>
                    <div>
                        <p>This page contains important information that you need to be aware of prior to using 2AZTRAVEL services. Please read these Terms and Conditions carefully before using this website.</p>
                        <br /><p>If you continue to browse and use this website, you are agreeing to comply with and be bound by the following terms and conditions of use.</p>

                    </div>

                </div>
                <div className='bg-slate-50 mb-2 border-solid border-2 p-3'  id='Travel documentation'>
                    <div>
                        <h3>Travel Documentation</h3>
                    </div>
                    <div>
                        <p>Different situations require different documents. Please become familiar with the specific document requirements for the country(s) you are visiting. All passengers traveling outside of the US are required to have certain travel documents: a valid passport in the same name as the airline ticket, and either a round-trip airline ticket or proof of onward travel. Additionally, many nations require a visa issued by the destination country, medical inoculations for infected areas/countries, and/or proof of sufficient funds when entering the destination country. Some countries have a departure tax payable at the airport before departing the country. Contact the destination country's consulate or equivalent sources for these rules prior to buying airline tickets</p>
                    </div>

                </div>
                <div className='bg-slate-50 mb-2 border-solid border-2 p-3' id='Booking requirements'>
                    <div>
                        <h3>Booking requirements</h3>
                    </div>
                    <div>
                        
                        <ul className="list-disc ml-4">
                            <li>A valid phone number and email address are required to secure your booking. This agency is not responsible for any delays or inconveniences precipitated in part by the customer's failure to provide accurate contact information.</li>
                            <li>The name on each airline ticket must match a valid photo ID shown at the airport.</li>
                            <li>Passengers are responsible for ensuring the accuracy of the information on their travel booking transactions. 2AZTRAVEL allows changes free of charge if notified by the passengers within 24 hours of booking. Any changes made after 24 hours will be subjected to penalty fee(s).</li>
                            

                        </ul>
                        
                    </div>

                </div>
                <div className='bg-slate-50 mb-2 border-solid border-2 p-3' id='Sales'>
                    <div>
                        <h3>Sales</h3>
                    </div>
                    <div>
                        
                        <ul className="list-disc ml-4">
                        <li>Airline fares are not guaranteed until tickets are issued correctly within the airlines' guidelines, credit card successfully charged, and route/fare validity double-checked.</li>
                            <li>In some cases, airlines will allow a change of travel dates for a fee and a charge for any difference in fare under stringent conditions</li>
                            <li>Name changes are not permitted once a reservation has been confirmed. For international flights, first and last names on a ticket must match the passenger's passport. For domestic flights, the names need only match a government-issued photo ID.</li>
                            <li>Young Passengers - unaccompanied minor(s) or any child traveling with one parent or someone who is not a parent or legal guardian or a group from two (2) years of age but under eighteen (18) must call 2AZTRAVEL Reservations at 1 833 859 8686. Proper documents and requirements are needed.</li>
                            <li>Expectant Mothers - women who are pregnant for 24 weeks or longer must call 2AZTRAVEL Reservations at 1 833 859 8686 to make a reservation. Medical certificates and other important requirements are needed.</li>
                            <li>Medical Clearance Required - for the safety and convenience of the passenger and to avoid hazard to the safety of the flight persons who are: suffering from medical conditions such as contagious diseases or life threatening illness, and persons whose mental or physical condition is such as to involve hazard to himself/herself or to the safety of the flight, such as pregnant women, are required to disclose such condition for proper medical clearance and must call 2AZTRAVEL Reservations at 1 833 859 8686.</li>
                            <li>The customer agrees he or she has reviewed the itinerary displayed on the bookable page (credit card page) for accuracy of dates, times, and correct airports while noting any airport transfers, long layovers, stops, or overnight stays.</li>
                            <li>If the site fails to show a confirmation screen when you attempt a travel booking, it will be unknown if the error occurred on the user's own computer or server. Therefore, it is the customer's responsibility to contact our agency to ascertain whether the booking is confirmed</li>
                            <li>If the customer makes a mistake in the process of travel booking, he or she should not make a second booking until inquiring with our support department about the status of the first one</li>
                            <li>For flights to Africa, we likely will contact the customer to request a fax authorization form and photocopy of a government-issued ID before ticketing. If the customer does not wish to fax a photo ID, we can suggest an alternative item to fax. This is for protection against identity theft for the credit card holder.</li>
                        </ul>
                        
                    </div>

                </div>
                <div className='bg-slate-50 mb-2 border-solid border-2 p-3' id='Free 24-hour fare hold'>
                    <div>
                        <h3>Free 24-hour fare hold</h3>
                    </div>
                    <div>
                        
                        <ul className="list-disc ml-4">
                            <li>Free 24-Hour Fare Hold applies to flights departing 72 hours or later from the time of reservation. Flights flying sooner are subject to the airlines' fare hold rules. 2AZTRAVEL will not be held liable if the airline cancels the flight before the 24-hour hold period. Reservations on hold will automatically be canceled if left unpaid after 24 hours from the time of reservation. </li>
                        </ul>
                        
                    </div>

                </div>
                <div className='bg-slate-50 mb-2 border-solid border-2 p-3' id='Processing'>
                    <div>
                        <h3>Processing</h3>
                    </div>
                    <div>
                        
                        <ul className="list-disc ml-4">
                            <li>Electronic tickets will be issued within 24 hours.</li>
                            <li>Meal and seat preferences will be sent to the airline, but cannot be guaranteed. Seats for all passengers will be selected automatically based on the best seats available and adjacent to the primary passenger, if possible.</li>
                            

                        </ul>
                        
                    </div>

                </div>
                <div className='bg-slate-50 mb-2 border-solid border-2 p-3' id='Taxes, charges, and fees'>
                    <div>
                        <h3>Taxes, charges, and fees</h3>
                    </div>
                    <div>
                        
                        <ul className="list-disc ml-4">
                            <li>2AZTRAVEL may charge non-refundable service fee(s) for certain products and services such as airline tickets, seat assignments, hotel bookings, vacation packages, and land transfers.</li>
                            <li>For many airline fares, your total price may be split into two or more charges between Airline’s name and Travelfast Int’l. It will appear in your credit card statement. Sometimes there is a separate charge by an airline for each passenger. You may also see charges split into a part called "airfare balance," "service fee," "agent fee," "travel service" or similar. For electronic tickets, your total charges always will be what is reflected on your booking/your reservation.</li>
                            

                        </ul>
                        
                    </div>

                </div>
                <div className='bg-slate-50 mb-2 border-solid border-2 p-3' id='Departure information'>
                    <div>
                        <h3>Departure information</h3>
                    </div>
                    <div>
                        
                        <ul className="list-disc ml-4">
                            <li>All passengers are strongly advised to reconfirm their flights directly with the departing airline 24-48 hours prior to departure due to possible airline schedule changes.</li>
                            <li>Contracts of Carriage: Making a purchase of any airline's fare through any website constitutes acceptance of the airline's Contract of Carriage. Each airline's rules for boarding and carriage of passengers are available via phone to the airline and often on their website if you search "contract of carriage".</li>
                            <li>Do not book a minor flying alone, age 16 or less, unless you are willing to pay additional airline fees at the airport and you are fully aware of what the particular airline's rules are for a minor traveling alone. Some airlines disallow solitary minors on particular flight connections.</li>
                            <li>Passengers are advised to be fully checked in at airports a minimum of two hours before departure on all domestic flights and three hours for international flights. It is advised to double-check these constraints with airport or airline personnel with regard to your local airport.</li>
                            <li>Our agency is not liable for "acts of God," e.g. natural disasters, poor weather, aircraft equipment failures, and world health or war/political problems, and will not be liable for flight delays, forced cancellations or overbooking done by the airline; airline schedule changes, lost or damaged luggage, or fallout from the bankruptcy status or liquidation of an airline. If flights are canceled by the airline for one of the above reasons, service-related fees will remain non-refundable but the airline may allow refund of part or all of the base fare.</li>
                            
                        </ul>
                        
                    </div>

                </div>
                <div className='bg-slate-50 mb-2 border-solid border-2 p-3' id='Advertised fare guarantee'>
                    <div>
                        <h3>Advertised fare guarantee</h3>
                    </div>
                    <div>
                        <p>Advertised Fare Guarantee: All the fares advertised on this website are guaranteed to be reasonably available within the specified travel period in the fare restrictions. If the fare is not available, 2AZTRAVEL will honor the advertised fare and sell the fare at the advertised level. </p>
                        
                    </div>

                </div>

                <div className='bg-slate-50 mb-2 border-solid border-2 p-3' id='General rules and conditions'>
                    <div>
                        <h3>General rules and conditions</h3>
                    </div>
                    <div>
                        <p>When you book services using our website, you authorize us to act as your representative during the process of booking such services from the selected Travel Supplier. By doing so you also authorize us to make a payment for the above-mentioned products/and/or services in your name and on your behalf, as required. We shall issue the ticket and charge you, accordingly, depending on which product you book. The amount you are going to be charged will be displayed before your booking is confirmed by you.</p>
                        <p>The Customer shall be obliged to deliver all data that are complete and free of doubt, which is necessary for booking. In case the information is inaccurate or payment is processed with a credit card from a third person, we may require additional verification.</p>
                        <p>2AZTRAVEL is not responsible for the scheduled changes or cancellations. Airlines are entitled to modify, cancel or reschedule the flights they process. If there are any issues related to air tickets that have been contracted through our services, do not hesitate to let us know about this. In our turn, we guarantee you to resolve the situation as soon as possible.</p>
                        
                    </div>

                </div>

                <div className='bg-slate-50 mb-2 border-solid border-2 p-3' id='Suppliers: rules and restristions'>
                    <div>
                        <h3>Suppliers: rules and restristions</h3>
                    </div>
                    <div>
                        <p>The terms and conditions set forth in this agreement extend to all services provided by our company, including the services you conclude through us from our partners.</p>
                        <p>Under these conditions, our company will urge you to study in detail all the ones indicated in this agreement, so that there will still be no differences between the company and customers.</p>
                        <p>Since you contract any of our company’s or of our partners’ services through our company, you automatically agree to all fees charged for the contracted services, including those additional that companies may require. We reserve the right to cancel your booking if full payment is not received in a timely fashion. Some airline or hotel suppliers may require you to present a credit card or cash deposit upon check-in to cover additional expenses incurred during your travel. Such a deposit is unrelated to any payment received by 2AZTRAVEL for your booking.</p>
                        <p>We urge you to understand that any breach of the rules and restrictions of the providers of such providers may result in the cancelation of your reservation, the denial of access to the applicable product or travel services, the loss of any funds paid for such reservations, and/or the debit of your account for any costs, we incur as a result of such an infringement.</p>
                        
                    </div>

                </div>
                <div className='bg-slate-50 mb-2 border-solid border-2 p-3' id='Fraud prevention measures'>
                    <div>
                        <h3>Fraud Prevention measures</h3>
                    </div>
                    <div>
                        <p>We know many of our customers have relatives and friends abroad who may want to visit our customers in the US or even relocate permanently. That is why we offer competitive one-way and round-trip fares from a wide selection of departure points abroad. Recently, some of our customers have become victims of a scam.</p>
                        <p>Scammers are increasingly sophisticated, and it no longer takes a "fool" to be a victim. Perpetrators of fraudulent campaigns invest careful time with their victims, setting up a relationship of trust, confidence and if possible, even romantic involvement. Once a close relationship is established, a request or plea for help is usually made. Typically, a state of emergency is created and our clients are asked for help with visa, airline ticket, a large inheritance, or other legal problems.</p>
                        <p>It is possible to have a real, honest and lasting relationship with someone from abroad. Nevertheless, no matter where you met and what the circumstances are, we strongly encourage all our customers to be cautious when purchasing tickets for individuals residing abroad. Due to the extreme level of scam activity in some countries, we strongly advise a background check.</p>
                        <p>International Travel Network LLC requires credit card verifications for all third party credit card transactions. It protects us against daily fraud attempts. We are very unhappy to learn about any fraud that affects our customers. This is why we are sharing this recent experience with you - our customers. We hope that this information is helpful and wish your friends and relatives a safe flight and satisfying stay in the US.</p>
                    </div>

                </div>
                <div className='bg-slate-50 mb-2 border-solid border-2 p-3' id='Billing information'>
                    <div>
                        <h3>Billing information</h3>
                    </div>
                    <div>
                        <p>Please note: The billing address must match exactly the address on the credit card statement. Those customers who wish to purchase tickets for relatives or friends will be contacted by an ITN LLC billing support representative to initiate a three way call to authorize the purchase directly with the issuing bank. Some credit and/or debit cards may have daily limits; please ensure with your bank that you have sufficient funds for the purchase of your ticket(s). The fares are not guaranteed until the tickets are issued.</p>
                        
                    </div>

                </div>
                <div className='bg-slate-50 mb-2 border-solid border-2 p-3' id='Itinerary information'>
                    <div>
                        <h3>Itinerary information</h3>
                    </div>
                    <div>
                        <p>The names of the passengers provided must match the names shown on the passports. Once the tickets are issued, they are non-transferable. Even a small mistake in the name can cause a major inconvenience for the passengers during their travel. Sometimes this mistake can even prevent the passengers from using their tickets. Remember that many of the deeply discounted fares are non-refundable.</p>
                        
                    </div>

                </div>
                <div className='bg-slate-50 mb-2 border-solid border-2 p-3' id='Collecting personal data'>
                    <div>
                        <h3>Collecting personal data</h3>
                    </div>
                    <div>
                        <p>The TSA (TRANSPORTATION TEST SECURITY ADMINISTRATION) requires us to transmit information collected from you. Providing this information is mandatory. Issuing your tickets will not be possible without this information. TSA may share information you provide with law enforcement or intelligence agencies or others under its records notice. For more on TSA privacy policies or to view the records notice and the privacy impact assessment, see TSA's website at TSA.gov.</p>
                        
                    </div>

                </div>
                <div className='bg-slate-50 mb-2 border-solid border-2 p-3' id='Change Of Aircraft En Route'>
                    <div>
                        <h3>Change Of Aircraft En Route</h3>
                    </div>
                    <div>
                        <p>Sometimes you must change aircraft en route even though your ticket may show only one flight number and have only one coupon for that flight. Further, in the case of some travel, one of your flights may not be identified at the airport by the number on your ticket, or it may be identified by other flight numbers in addition to the one on your ticket. At your request, the seller of this ticket will give you details of your change of aircraft, such as where it will occur and what aircraft types are involved.</p>
                        
                    </div>

                </div>
                <div className='bg-slate-50 mb-2 border-solid border-2 p-3' id='Travel documents'>
                    <div>
                        <h3>Travel documents</h3>
                    </div>
                    <div>
                        <p>Travel documents required for all tickets (paper, e-tickets, or paperless) include a valid Passport, which must be presented for all international flights. Some countries may require a visa and/or health card. It is the passenger's responsibility to have all necessary travel documents in possession at check-in. The passengers shall verify the visa requirements for all the stops as some of the countries may require a transit visa. Those passengers transiting via or connecting between the airports within the European Union - Schengen Zone may need a Schengen Entry visa. Traveling on a one-way ticket may be restricted. If you are traveling on a one-way ticket, it is your responsibility to make sure you are eligible. ITN LLC agents do not advise passengers on visa requirements. Please contact the embassy of the country you are going to visit or transit through to get the up-to-date requirements.</p>
                        <p>In addition, passport and visa information may be obtained by contacting the Travel Advisory Section of the U.S. State Department by visiting the State Department's Web site at Travel.State.Gov. Non-U.S. passport holders should be sure to contact the embassies of their destination and transit countries to obtain entrance requirements. To obtain medical information, you may contact the centres for Disease Control by visiting the CDC's Web site at CDC.gov.</p>
                        
                    </div>

                </div>
                <div className='bg-slate-50 mb-2 border-solid border-2 p-3' id='Disputes'>
                    <div>
                        <h3>Disputes</h3>
                    </div>
                    <div>
                        <p>The dispute resolution methods arising from violations of our website or the following agreement will be settled on the basis of Compulsory Arbitration by the US Arbitration Association. An exception to the above is that you have the right to apply to a competent territorial court, but since you resort to it, you are waiving the right to address the US Arbitration Association. By using our site or our service, you automatically agree to the dispute resolution procedures outlined above. From the moment you access our site or our services, you automatically agree with all the indicated arbitration. This Agreement, and any dispute between you and the Company, shall be governed by the laws of the state of Virginia without regard to principles of conflicts of law, provided that this arbitration agreement shall be governed by the Federal Arbitration Act. You can decline this agreement to arbitrate by filling out an arbitration opt-out letter and sending it to our email within 30 days of first accepting these Terms.</p>
                        <p>By accessing this website or by requesting our services, you agree with the Terms and Conditions that we impose. We are not responsible for the fact that you have not thoroughly studied all that is stated in this agreement.</p>
                        <p>Under this agreement, the payment processing services for goods and/or services purchased on this website are provided by 2AZTRAVEL on behalf of the airlines depending on the type of payment method used and on the type of services and goods.</p>
                    </div>

                </div>
                <div className='bg-slate-50 mb-2 border-solid border-2 p-3' id='Procedure for Resolution of Disputes'>
                    <div>
                        <h3>Procedure for Resolution of Disputes</h3>
                    </div>
                    <div>
                        <p>The base of our company is the customers’ gratification, in fact, if there is a conflict between us, we try as soon as possible to solve the problem in the most economical and benevolent manner. Respectively, you agree to solve any conflict or petition relating in any way to the website, any trading with our customer service agents, any services and products furnished, any presentation made by us by getting in touch with our customer support or suggesting a claim via an online form.</p>
                        
                    </div>

                </div>
                <div className='bg-slate-50 mb-2 border-solid border-2 p-3' id='Credit Card Chargebacks'>
                    <div>
                        <h3>Credit Card Chargebacks</h3>
                    </div>
                    <div>
                        <p>You have the ability to dispute charges with credit card companies ("chargebacks''). If you have a question about a charge on your credit card statement, we encourage you to call 2AZTRAVEL prior to disputing a charge with your credit card company so we may discuss and answer any questions or concerns you may have about our charges. In all cases, 2CNTRAVEL will work with you in resolving your concerns. 2AZTRAVEL retains the right to dispute any chargeback that it believes is improper, as described more fully below. 2AZTRAVEL also retains the right to fully cancel any booking in the event of a chargeback related to that booking.  2AZTRAVEL deems the following chargeback scenarios as improper and retains the right to investigate and rebut any such chargeback claims and to recover costs of such chargeback claims from you.</p>
                        <ul className="list-disc ml-4">
                            <li>Chargebacks resulting from non-cancellable bookings in the event that 2AZTRAVEL or the airline cannot provide a refund, whether or not the booking is used.</li>
                            <li>Chargebacks resulting from charges authorized by family, friends, associates or other third parties with direct access to your credit card.</li>
                            <li>Chargebacks arising from the airline’s failure to deliver a product or service in a manner that’s consistent with the airline’s product description.</li>
                            <li>Chargebacks resulting from force majeure or other circumstances that are beyond the control of 2AZTRAVEL.</li>
                            <li>Chargebacks related to the services or products that have been used fully or partially by you.</li>
                            
                        </ul>
                        <p>For greater certainty, we may, in accordance with the Privacy Policy, use information relating to you, including recordings of customer service calls, to dispute chargeback claims from you.  You hereby unconditionally authorize INTERNATIONAL TRAVEL NETWORK LLC to charge your credit card (and / or retain from your customer\'s account) with the amount of any chargeback processed by the bank and related to the services or products that have been used fully or partially by you.  You hereby unconditionally authorize INTERNATIONAL TRAVEL NETWORK LLC to charge your credit card (and / or retain from your customer's account) with the amount of any chargeback fees applied by the bank to the chargeback requested by you without merits and subsequently rejected by the bank.</p>
                    </div>

                </div>
                <div className='bg-slate-50 mb-2 border-solid border-2 p-3' id='Covid-19 waiver of liabiity'>
                    <div>
                        <h3>Covid-19 waiver of liabiity</h3>
                    </div>
                    <div>
                        <p>You agree that it is your personal decision to travel, and you are doing so with full knowledge of current travel recommendations and travel restrictions with regards to the risks of COVID-19. We assume no responsibility for and shall not be liable for unsafe conditions or health hazards including pandemics or other illnesses. We have no special knowledge of dangers during travel or at destinations. For information related to such dangers, we recommend going to the State Department travel website at www.travel.state.gov, click on "Find International travel Information” then click on "Country Information", and fill in the name of the destination country. For medical and health information, we recommend going to the Centers for Disease Control website at www.cdc.gov/travel, then click on “Destinations” and scroll to the name of the destination country. We have no responsibility for COVID-19-related requirements that travel suppliers and governments may impose from time to time, such as health affidavit forms, health screenings prior to departure or upon arrival, face coverings, or quarantines. For the latest COVID-19 government travel regulations, we recommend going to IATA’s website at https://www.iatatravelcentre.com/international-travel-document-news/1580226297.htm. For the latest travel supplier requirements, check the supplier’s home page. We are not responsible for the acts or omissions of travel suppliers or their failure to adhere to their own schedules, provide services or refunds, financial default, or failure to honor future trip credits. We have no special knowledge regarding the financial condition of the suppliers, and we have no liability for recommending a trip credit in lieu of a refund. If requested, we will assist with obtaining any refunds due or rebooking trips using future credits, but we may charge a nonrefundable fee for such services. You agree to hold us harmless for your election not to purchase travel insurance or for any denial of claim by travel insurer as it relates to COVID-19 or any other claim under the policy. YOU HEREBY EXPRESSLY ASSUME ALL OF THE RISKS AND DANGERS DESCRIBED ABOVE, AND YOU HEREBY EXPRESSLY AGREE TO FOREVER RELEASE, DISCHARGE AND HOLD US, AND OUR AGENTS, EMPLOYEES, OFFICERS, DIRECTORS, ASSOCIATES, AFFILIATED COMPANIES, GUIDES, GROUP LEADERS, AND SUBCONTRACTORS HARMLESS AGAINST ANY AND ALL LIABILITY, ACTIONS, CAUSES OF ACTIONS, SUITS, CLAIMS, AND DEMANDS OF ANY AND EVERY KIND AND NATURE WHATSOEVER WHICH YOU NOW HAVE OR WHICH MAY HEREAFTER ARISE OUT OF OR IN CONNECTION WITH THESE RISKS AND DANGERS.</p>
                        
                    </div>

                </div>
                <div className='bg-slate-50 mb-2 border-solid border-2 p-3' id='Ticketing policies'>
                    <div>
                        <h3>Ticketing policies</h3>
                    </div>
                    <div>
                        <p>Once you have completed your booking on our website, you will receive an order confirmation with 2AZTRAVEL on the email address provided by you. This email serves as proof that you have successfully made a reservation with 2AZTRAVEL and it reflects your Passenger(s) details, Itinerary Details, and Summary of Charges.</p>
                        <p>Please note that the order confirmation is not the electronic ticket itself. A separate email with an e-ticket will follow once your reservation is verified and ticketed.</p>
                        <p>The Terms of your reservation, including price, availability, dates of travel, etc. are not guaranteed until the booking is ticketed and may be subject to changes due to various reasons.</p>
                        <p>The ability to cancel or modify a booked flight is restricted and will depend on the airline’s fare rules or other terms and conditions. While some airlines may allow free cancellations within 24 hours after the ticket issuance, this possibility is limited for specific airfares and ticket types. If you wish to cancel your reservation, please contact our Customer Care representatives and request the cancelation policy of your ticket.</p>
                        <p>Changes to name details are restricted by many airlines, therefore in case any change is required, the customer must be aware that modifications are applied only in accordance with the airline’s policy. Most airlines treat a name change as a cancellation, to which standard conditions and charges would apply.</p>
                        <p>In case that you request any changes and/or modifications caused by force majeure circumstances are needed in your original booking (cancelation or modification), in addition to the terms and conditions of the airline company, our processing fees listed below will apply.<br />Post-Ticketing processing fees. Quoted per passenger</p>
                        <hr />
                        <p>Void – Cancellation requested within 24 hours of booking resulting in refund or reservation changes<br />$50.00</p>
                        <hr />
                        <p>Cancellation and refunds beyond 24 hours of booking but prior to current scheduled trip departure<br />$150.00</p>
                        <hr />
                        <p>Changes/exchanges to existing tickets, prior to current scheduled trip departure<br />$150.00</p>
                        <hr />
                        <p>Schedule changes handling, including rebooking to new travel dates or ticket cancellations and refunds<br />$50.00</p>
                        <hr />
                        <p>Agent assisted waivers, including name corrections, refund and exchange exceptions, or no-shows<br />$50.00</p>
                        <p>You may be entitled to a partial refund if you cancel your booking. In addition to the cancellation terms and conditions of the airline company, our standard processing fees will apply.</p>
                        <p>The refundable amount will be credited back to the original source of payment, however, please be advised that the return period depends on your bank policy.</p>
                        <p>If you have booked with us any products or services, including flights, but don’t turn up to check-in (no show), or, otherwise, do not avail yourself of the purchased products or services, you will not be entitled to any refund. You may, however, be entitled to a tax refund as you have already paid for your flight. This provision is subject to relevant airline policy.</p>
                    </div>

                </div>
                <div className='bg-slate-50 mb-2 border-solid border-2 p-3' id='Flexible Ticket'>
                    <div>
                        <h3>Flexible Ticket</h3>
                    </div>
                    <div>
                        <p>The Flexible Ticket plan is designed to allow customers to make date and time changes on flight booking without covering the airline’s change fees or processing fees. The customer(s) might still have to pay the difference between already paid and new fares, where applicable. If it is necessary to make changes on flight booking, the request must be submitted through our Customer Care team and it will be subject to the below terms:</p>
                        <ul className="list-disc ml-4">
                            <li>The change on a flight booking request must be made exclusively with our Customer Care department via chat, phone at least 24 hours prior to your first scheduled departure.</li>
                            <li>The plan does not apply to tickets changed or directly canceled with the airline. In such cases, the plan shall be considered consumed.</li>
                            <li>Once the 24 hours prior to the flight departure limit has been passed, the Plan will be considered consumed and fare rules imposed by the airline will apply.</li>
                            <li>Flight booking change is possible only within the same airline(s) and same ticket stock. Ticket transfer to a different carrier is not permitted.</li>
                            <li>When making the flight booking change the next dates must be set so that these do not exceed 12 months from the date the original ticket was booked.</li>
                            <li>Changing the place of departure or destination place is not permitted. When processing the requested change the flight segments must be used in the same order as they were originally booked. Out of sequence usage is not permitted.</li>
                            <li>Change of a ticket to allow a so-called “stopover” — staying in a connecting city longer than 8 hours—is not permitted.</li>
                            <li>The change can be made for the entire trip or for its return once the first part of the trip is completed. It can not be done mid-trip or for a specific flight segment.</li>
                            <li>Any reservation change is subject to seat availability. If the requested change results in a more expensive fare, the customer(s) will have to cover the difference.</li>
                            <li>Upgrades to a different booking class or a different cabin are not covered by this Plan.</li>
                            <li>The Plan does not cover name corrections, name changes, or ticket transfers to different individuals.</li>
                            <li>The plan does not cover cases when customers did not show up to their flights or missed their connections for any reason(s).</li>
                            <li>No additional-to-the-ticket expenses (pre-selected seats, additional baggage, insurance packages, etc.) are covered by the plan, and will not be transferred towards the new ticket(s) or refunded.</li>
                            <li>The Plan covers only the first change, any subsequent changes will be subject to airline-imposed fees and our processing fees.</li>
                            <li>The plan is to be considered consumed once the trip is finished or the ticket was refunded.</li>
                            <li>The costs associated with the Flexible Ticket plan are non-refundable.</li>
                        </ul>
                        
                    </div>
                    

                </div>
                <div className='bg-slate-50 mb-2 border-solid border-2 p-3' id='Limitation of liability'>
                    <div>
                        <h3>Limitation of liability</h3>
                    </div>
                    <div>
                        <p>All information contained on our website is disseminated as disseminated. We do not guarantee in any way the timeliness, accuracy, or availability of information unless these are guaranteed by statute or other laws and international treaties on the websites. In no event, including, but not limited to, negligence will, 2AZTRAVEL, including its respective officers, directors, employees, representatives, parents, subsidiaries, affiliates, distributors, suppliers, licensors, agents or others involved in creating, sponsoring, promoting, or otherwise making available the Site and its contents (collectively the “Covered Parties”), be liable to any person or entity for any injury, loss, claim, damage or for any special, punitive, exemplary, direct, indirect, incidental, compensatory or consequential damages of any kind, regardless of whether are based on the contract, tort, negligence, offenses, strict liability or otherwise, arising out of or in any way related with the activities or business of our Company, including but not limited to: (i) loss of goodwill, profits, business interruption, data or other intangible losses; (ii) the use, or inability to use, unauthorized use of, performance or non-performance of the website or the services or materials on the website or the reserved travel reservations through the 2AZTRAVEL call center, even if they are informed about the possibility of such damages; (iii) unauthorized access to or tampering with your personal information or transmissions; (iv) the provision or failure to provide any service; (v) errors or inaccuracies contained on the Website or any information, software, products, services, and related graphics obtained through the Website; (vi) any transactions entered into through this Website; (vii) any damages or viruses that may infect computer equipment or other property, or any loss of data, access, use or use of your account browsing the Website, or downloading materials, data, text, images, videos, audio or other information from the Website or associated with any e-mail or links sent by 2AZTRAVEL; or (viii) damages otherwise arising out of the use of the Website, any delay or inability to use the Website, or any information, products, or services obtained through the Website.</p>
                        <p>In no case shall our total liability, or that of our suppliers or distributors, exceed the total costs stipulated in the itinerary that generate such liability. Please note that claims or cause of action arising out of or in connection with your access and use, or the purchase of products and/or services from the Website must be submitted within one hundred eighty (180) days from the date the purchase was completed. The legislation in force does not allow limits or exclusions regarding the liability for the harmed damages, so the ones indicated above may not apply in your case. Your use of the site will be at your own risk. Our company acts as an intermediary or as an agent for the products and services related to travel such as air transport, hotel accommodation, meals, travel insurance, etc., and is in no way responsible for the products and services of these suppliers.</p>
                        <p>The carriers, hotels, and other providers that provide travel or other services on this website are independent contractors and not agents or employees of 2AZTRAVEL or its Covered Parties. Our company and the subsidiaries of the company are not responsible for the acts, errors, omissions, representations, guarantees, violations, or negligence of such providers or for any personal injury, death, loss, accident, delay, material damage, or other damages or expenses resulting from them, at the same time. We have no liability and will not make any refund or accept responsibility for any damage in case of any delays, cancellations, overbooking, strike, labor disputes, bankruptcy, machinery breakdown, quarantine, government restraints, weather, force majeure or other causes beyond the Covered Partied direct control.</p>
                        <p>No Covered Party shall be responsible for any Service Provider’s, that provides services on this website, breach of warranty, nor for any other wrongdoing of a Service Provider (including any liability in tort), as to any products and/or services available through this website. No Covered Party shall be responsible for any Service Provider’s failure to comply with this Agreement or with applicable federal, state, provincial, and local law.</p>
                        <p>By using our site, you will automatically agree to the Terms and Conditions set forth in this agreement and you will not bring any legal proceedings against our company, or its Covered Parties. Therefore, both 2AZTRAVEL, its Covered Parties are not responsible for any loss or damage to the property or injury of any person caused by any defect, negligence, or any other wrongful act of omission or any non-compliance by any kind.</p>
                        <p><span>Tourism provider;</span> any inconvenience, loss of pleasure, mental suffering or other similar matter; any delayed departure, missed connections, replacement of accommodations, termination of service or changes in rates and charges; any cancelation or double reservation of reservations or tickets outside the reasonable control of 2AZTRAVEL; and any claims of any kind arising out of or in connection with air transport or other transport services, products or other features performed (or not) or arising (or not) in connection with your travels. To exclude other claims, we inform you that we are not responsible for any delays, cancellations, or changes to the flight programs performed by the airlines. The limitations specified in these Terms and Conditions will survive and apply even if it is found that any limited remedy specified in these Terms and Conditions has failed to achieve its essential purpose. The limitations of liability provided in these Terms and Conditions to ensure the benefit of 2AZTRAVEL, its affiliates, and the providers of travel products and services purchased through our website.</p>
                    </div>

                </div>
                <div className='bg-slate-50 mb-2 border-solid border-2 p-3' id='Force majeure'>
                    <div>
                        <h3>Force majeure</h3>
                    </div>
                    <div>
                        <p>Any act or situation which is beyond our control is known as a “Force Majeure” event. In such a circumstance, we are not liable for any failure to perform or delay in performance of our obligations or contracts, for interruption of service directly or indirectly from acts of God.</p>
                        <p>No party will be held legally responsible for any losses or damages of nature incurred or suffered by that other party, as long as this failure or delay is the direct result of a Force Majeure event.</p>
                        <p>Any act, event, non-happening, omission, or accident beyond our control includes (but is not limited to):</p>
                        <ul className="list-disc ml-4">
                            <li>Strikes, lock-outs, or other industrial action.</li>
                            <li>Civil commotion, riot, invasion, cyber-attack, terrorist attack or threat of terrorist attack, war (whether declared or not), or threat or preparation for war.</li>
                            <li>Fire, explosion, storm, flood, earthquake, subsidence, epidemic, or other natural disasters.</li>
                            <li>Impossibility of the use of railways, shipping, aircraft, motor transport, or other means of public or private transport.</li>
                            <li>Interruption or failure of utility service (including the inability to use public or private telecommunications networks).</li>
                            <li>The acts, decrees, legislation, regulations, or restrictions of any government.</li>
                            <li>Other causes, beyond our reasonable control.</li>
                        </ul>
                        <p>We will use our reasonable endeavors to minimize any delay caused by Force Majeure or to find a solution by which our obligations under these Terms of Use or any related contract between us may be performed despite the Force Majeure event.</p>
                    </div>

                </div>
                <div className='bg-slate-50 mb-2 border-solid border-2 p-3' id='Terms of use (based on 2vietnamvisa)'>
                    <div>
                        <h3>Terms of use (based on 2vietnamvisa)</h3>
                        <h3>Payment</h3>
                    </div>
                    <div>
                        <p>For all of our services, we accept the following 03 payment methods (For more details, please check the Payment Guideline):</p>
                        <p>Option 1: Pay by Credit Card, VISA Card, MasterCard, American Express, …</p>
                        <p>Option 2: Bank transfer</p>
                        <p>You can pay through our bank account:</p>
                        <p>Account name: Nguyen Thi Ha
                        <br />Account number: 1903 9005 1570 18 (pay in VND)
                        <br />Bank name: Techcombank Saigon (TCB SAI GON)
                        <br />Bank address: TECHCOMBANK (TCB) - THU DUC BRANCH - 117 Dan Chu, Binh Tho Ward, Thu Duc, Ho Chi Minh City
                        <br />Swift code: VTCBVNVX
                        <br />After payment, please send us the receipt so that we can track your payment and process The document as per your request.
                        </p>
                        <p>Option 3: Pay in cash at our office</p>
                        <p>Office address: B54-56 Bach Dang Str., Ward 2, Tan Binh Dist., Ho Chi Minh City
                        <br />Phone:+8428-7304-5657   
                        <br />Email 24/7: support@2vntravel.com
                        </p>
                        <p>Regardless of your payment method, any additional fees associated with your Bank or Financial Institution(s) that occur during the payment process are charged to you and your account. 2AZTRAVEL is not responsible for any fees.</p>
                    </div>

                </div>
                <div className='bg-slate-50 mb-2 border-solid border-2 p-3' id='Limitation of liability'>
                    <div>
                        <h3>Limitation of liability</h3>
                        <h3>DISCLAIMER</h3>
                    </div>
                    <div>
                        <p>Due to reasons beyond 2AZTRAVEL's control, we cannot guarantee that you will receive all confirmation emails and notifications. These reasons may include failed email, incorrect email address, email goes to spam folder, etc. if you do not receive email related to your Documents, you must contact Customer Service at least 2 days before arrival date. 2AZTRAVEL will not be liable for any loss or damage, including any refund claims.</p>
                        <p>It is the responsibility of the applicant to check the accuracy of the information in your documents. For any mistakes, the applicant must contact us immediately to correct them, otherwise the applicant is fully responsible for these mistakes. If these mistakes are made on our part, we will process the document for free, and if it is on the applicant's part, the applicant must pay the full fee to obtain a new document. The process of receiving the new document will take 1-2 working days, so the applicant must double-check the accuracy of the information as soon as the official letter is received.</p>
                        <p>Vietnam visa approval letters are usually issued with your name and other information, so you can see your name, passport number and date of birth in the same Document as others. If you would like to have your own Official Document, please send a request to support@2aztravel.com</p>
                        
                    </div>

                </div>
                <div className='bg-slate-50 mb-2 border-solid border-2 p-3' id='Privacy'>
                    <div>
                        <h3>Privacy</h3>
                    </div>
                    <div>
                        <p>Please read the Privacy Statement carefully, by which you also agree to be bound by using this website. Privacy Statement is part of this agreement.</p>
                        <p>Communication: By using this website and our services, you authorize 2AZTRAVEL to communicate with you by email or phone for all purposes including distribution of marketing and promotional.</p>                        
                    </div>

                </div>
                <div className='bg-slate-50 mb-2 border-solid border-2 p-3' id='Entire agreemaent'>
                    <div>
                        <h3>Entire agreemaent</h3>
                    </div>
                    <div>
                        <p>This Agreement together with the Privacy Statement constitutes the entire agreement between you and 2AZTRAVEL and supersedes any and all prior agreements, statements or representations regarding 2AZTRAVEL. Failure to enforce any provision of this Agreement shall not be construed as a waiver of such provision or the right to enforce such provisions. No waiver, amendment or other modification shall be null and void unless stated in writing and signed by both parties. This Agreement is governed by the laws of Vietnam.</p>
                    </div>

                </div>
                <div className='bg-slate-50 mb-2 border-solid border-2 p-3' id='Contact us'>
                    <div>
                        <h3>Contact Us</h3>
                    </div>
                    <div>
                        <p>If you have any questions regarding the Terms and Conditions of Use, please contact us at support@2aztravel.com</p>
                        <p>You can contact us directly at 2AZTRAVEL - B54-56 Bach Dang Str., Ward 2, Tan Binh Dist., Ho Chi Minh City</p>
                    </div>

                </div>












              </div>
      </div>
      <Footer/>
    </div>

  )
}

export default Term