import { Link } from 'react-router-dom'
import Navbar from '../../navbar/Navbar'
import Footer from '../../footer/Footer'
const Main = () => {
  return (
    <div>
        <Navbar/>
        <div className="text-white bg-blue-950 p-4  w-full">
        <div className="md:flex justify-between items-center md:mx-28">
            <div className='md:text-2xl font-bold hidden md:block'>Privacy Policy</div>
            <div className="text-white flex justify-between items-center space-x-4 text-center">
              <button className='font-bold'>About Us</button>
              <Link to='/term' className='font-bold '>Term & Conditions</Link>
              <Link to='/' className='font-bold text-red-600'>Privacy Policy</Link>
            </div>
        </div>
      </div>
    <div className='pt-4'>

        <div className="mx-auto ">
                <div className=" md:flex flex-nowrap max-w-scress-xl mx-auto justify-center max-w-7xl">
                <div className="flex-1 bg-slate-50 text-indigo-950 text-sm flex flex-col border-solid border-2 mr-1 ml-2 p-3 ">
                    <a href="#Data Accuracy">Data Accuracy</a>
                    <a href="#The categories of personal information we collect">The categories of personal information we collect</a>
                    <a href="#Children">Children</a>
                    <a href="#If you fail to provide personal">If you fail to provide personal</a>
                    <a href="#Methods used for collecting your personal information">Methods used for collecting your personal information</a>
                    <a href="#For what purpose we use your personal information">For what purpose we use your personal information</a>
                    <a href="#Change of purpose">Change of purpose</a>


                </div>
                <div className=" flex-1 bg-slate-50 text-indigo-950 text-sm flex flex-col border-solid border-2 mr-1 ml-2 p-3">
                    <a href="#About electronic communications">About electronic communications</a>
                    <a href="#Cases of transmitting information to third parties">Cases of transmitting information to third parties</a>
                    <a href="#CAN SPAM act">CAN SPAM act</a>
                    <a href="#Your choices">Your choices</a>
                    <a href="#How we share your personal information">How we share your personal information</a>
                    <a href="#How we store and protect your data">How we store and protect your data</a>
                    
                </div>
                <div className="flex-1 bg-slate-50 text-indigo-950 text-sm flex flex-col border-solid border-2 mr-2 ml-2 p-3">
                    <a href="#Retention periods">Retention periods</a>
                    <a href="#Base on 2VnTravel">Base on 2VnTravel</a>
                    <a href="#Types of data collected">Types of data collected</a>
                    <a href="#Changes to this privacy policy">Changes to this privacy policy</a>
                    <a href="#Children privacy">Children privacy</a>
                    <a href="#Links to other sites">Links to other sites</a>
                    <a href=""></a>
                    <a href=""></a>
                </div>
                </div>
            </div>

            <div id='content' className=' max-w-7xl mx-auto p-2' >
                <div className='bg-slate-50 mb-2 border-solid border-2 p-3'  id='Data Accuracy'>
                    <div>
                        <h3>Data Accuracy</h3>
                    </div>
                    <div>
                        <p>This privacy policy has been compiled to better serve those who are concerned with how their ‘Personally Identifiable Information’ (PI) is being used online. PI, as used in US privacy law and information security, is information which can be used on its own or with other information to identify, contact, or locate a single person, or to identify an individual in context.</p>
                        <br /><p>When you give us personal information, you are telling us that the information is true, accurate, complete and current. You are also telling us, that you have the authorization to provide it to us
                        It is important that the PI we hold about you is accurate and current. 
                        </p>
                        <br /><p>Please read our privacy policy carefully to get a clear understanding of how we collect, use, protect, or otherwise handle your Personally Identifiable Information in accordance with our website.</p>

                    </div>

                </div>
                <div className='bg-slate-50 mb-2 border-solid border-2 p-3' id='The categories of personal information we collect'>
                    <div>
                        <h3>The categories of personal information we collect</h3>
                    </div>
                    <div>
                        <p>When ordering or registering on our site, you may be asked to enter your name, email address, mailing address, phone number, or other details to help you with your experience.</p>
                        <br /><p>We collect information from you when you place an order, subscribe to a newsletter, or enter information on our site.</p>
                        <br /><p>We may use the information that/which we collect from you when you register, make a purchase, sign up for our newsletter, respond to a survey or marketing communication, surf the website, or use certain other site features in the following ways:</p>
                        <ul className="list-disc ml-4">
                            <li>To personalize the user's experience and to allow us to deliver the type of content and product offerings in which you are most interested.</li>
                            <li>To improve our website in order to serve you better.</li>
                            <li>To allow us to better service you in responding to your customer service requests.</li>
                            <li>To administer a contest, promotion, survey, or other site feature.</li>
                            <li>To quickly process your transactions</li>
                            <li>To send periodic emails regarding your order or other products and services.</li>
                        </ul>
                        <p>We may collect, use, store and transfer different kinds of PI about you which we have grouped together as follows:</p>
                        <ul >
                            <li><span>Identifiers</span> or Identity Data such as a first/ middle/ last name, alias, postal address, unique personal identifier (cookie), date of birth, online identifier Internet Protocol address,  or other similar identifiers.</li>
                            <li><span>Contact Data</span>  includes (billing address, delivery address, email address and telephone numbers).</li>
                            <li><span>Commercial Information</span>, including requested price quotes, products or services purchased or other purchasing or consuming histories or tendencies, as well as Financial Data (bank account and payment card details) and Transaction Data (details about payments to and from you and other details of products and services you have purchased from us).</li>
                            <li><span>Network Activity Information</span>, including , but not limited to Technical Data (your login data, browser type and version, browsing history, search history, time zone setting and location, browser plug-in types and versions, operating system and Platform, and other technology on the devices you use to access our Platforms), and information regarding your interaction with our Platforms (Usage Data).</li>
                            <li><span>Geolocation data</span> (country, state or city).</li>
                            <li><span>Audio</span> (e.g. call records) and Electronic (e.g. email threads) information.</li>
                            <li><span>Inferences</span> (conclusions) drawn from any of the PI collected by ITN, including, but not limited to Profile Data (your preferences, characteristics, psychological trends, behavior, attitudes, intelligence, feedback and survey responses) and Marketing Data (your preferences in receiving marketing from us and our partners and your communication preferences).</li>
                        </ul>
                        <p>We also collect, use and share Aggregated Data such as statistical or demographic data for any purpose. Aggregated Data could be derived from your PI, but is not considered PI in law as this data will not directly or indirectly reveal your identity. For example, we may aggregate your Network Activity Information to calculate the percentage of users accessing a specific Platform feature. However, if we combine or connect Aggregated Data with your PI, so that it can directly or indirectly identify you, we treat the combined data as PI which will be used in accordance with this privacy policy.</p>
                        <p><span>Customer support</span> If you choose to contact our customer support services we will collect any inquiries, complaints or other information that you may submit to our support team. We do not collect any Special Categories of PI about you (this includes details about your race or ethnicity, religious or philosophical beliefs, sex life, sexual orientation, political opinions, trade union membership, information about your health, and genetic and biometric data). Nor do we collect any information about criminal convictions and offenses.</p>
                    </div>

                </div>


                <div className='bg-slate-50 mb-2 border-solid border-2 p-3' id='Children'>
                    <div>
                        <h3>Children</h3>
                    </div>
                    <div>
                        <p>ITN does not knowingly collect PI from minors, except if the minor is one of travelers. If we become aware that a minor is attempting to submit PI, we will remove this information from our records. If you are the parent/legal guardian of a minor who has given us PI, please contact us so we can delete it.</p>
                        
                    </div>

                </div>

                <div className='bg-slate-50 mb-2 border-solid border-2 p-3' id='If you fail to provide personal'>
                    <div>
                        <h3>If you fail to provide personal</h3>
                    </div>
                    <div>
                        <p>Where we collect PI required by law or under the terms of a contract, and you fail to provide that PI when requested, we may not be able to perform the contract we have or are trying to enter into with you (for example, to provide you with goods or services). In this case, we may have to cancel a product or service you have with us, but we will notify you if this is the case at the time.</p>
                        
                    </div>

                </div>
                <div className='bg-slate-50 mb-2 border-solid border-2 p-3' id='Methods used for collecting your personal information'>
                    <div>
                        <h3>Methods used for collecting your personal information</h3>
                    </div>
                    <div>
                        <p>At this time, the methods we and our third-party service provider use to collect your personal data are:</p>
                        <p><span>The personal information you give to us</span>: We collect your personal information directly from you.</p>
                        <p>For example, you provide us with your personal information when you register or book travel, contact our customer support.</p>
                        <p>At the same time, we have the passive ability to collect some personal information. How does this happen? When you visit our website, you provide the opportunity to collect certain information about yourself. In addition, when you are using our website, cookies and other similar technologies can help us automatically collect technical data about your equipment, navigation actions, and patterns. See the cookies section of this Privacy Policy for further information on the purposes for which we collect and use this information.</p>
                        <p><span>Voice Calls</span>: We may record or monitor calls to and from our Customer Support Team for contractual reasons, quality control purposes, analytics, staff training and/or to protect us in the event of a legal dispute. Any personal data obtained from you during the call will be treated in accordance with this Privacy Policy.</p>
                        <p><span>From Other Sources</span>: We may receive your Personal Information from other sources, such as public databases, joint marketing partners, social media platforms (including from people with whom you are friends or otherwise connected), and other third parties, to the extent permitted by applicable law.</p>
                        <p><span>Automatic Information</span>: We automatically collect certain information about your computer when you visit our website. For example, we record your IP address, Web browser software (such as Firefox, Safari, or Internet Explorer), and referring websites. We also may gather information about your online activity, such as trips or activities viewed and bookings made. We collect this automatic information to customize your user experience and protect against fraud. See also Cookies and other technologies below.</p>
                        <p>In order to help you find the nearest hotel, train station, airport, or send some important messages to you, our system can use the attributes and settings of your device that allow us to determine physical location. <br />You can opt-out of this communication at any time by contacting us via phone or email.</p>
                    </div>

                </div>
                <div className='bg-slate-50 mb-2 border-solid border-2 p-3' id='For what purpose we use your personal information'>
                    <div>
                        <h3>For what purpose we use your personal information</h3>
                    </div>
                    <div>
                        <p>We will use your PI for the following purposes: <br /> Improving our services To provide you and improve our Platforms and services, to better understand the users of our Platforms and services, and to protect our property and to prevent damage to them. <br /> <span>Regular customers</span>. If you have ever requested a price quote or purchased our services, we treat you as the Regular (loyal) Customer. Regular Customers have plenty of benefits:</p>
                        <ul className="list-disc ml-4">
                            <li>Become experts of using our services;</li>
                            <li>Receive the most relevant price quotes.</li>
                        </ul>
                        <p>According to our policy, we may contact you as a Regular Customer via email/phone saved within previous requests and transactions. Such cases may be, for example, when you have accidentally provided the wrong email/phone or when you cannot be reached via email/ phone left in the last request/ purchase. If you want to opt-out, please contact us.</p>
                        <p><span>Bookings:</span> We and our travel partners use your PI to process your bookings and store your itinerary information where applicable.</p>
                        <p><span>Marketing activities:</span> We use your information for marketing purposes. These activities may include: </p>
                        <ul className="list-disc ml-4">
                            <li>To send you marketing emails and/or text messages from ITN address regarding our services or those of our partners, if you have opted-in to receive emails and/or text messages from us or have transacted with us, and as permitted by law. You can easily unsubscribe from these marketing communications at any time by clicking on the “Unsubscribe” link included in the newsletter or by texting STOP via sms. To display more relevant advertising and recommendations, or suppress advertising and content that you might find irrelevant. This advertising might be shown to you on our Platforms as well as third party platforms (including Google and social media sites like Facebook) and include information or offers that we, or our business partners’, believe you will find interesting. Individualized advertising may be based on information collected through cookies or other tracking technologies. You can opt out from Google and Facebook ad personalisation any time.</li>
                            <li>If you choose to participate in promotional activities, relevant information may be used to administer these promotions.</li>
                        </ul>
                        <p>To communicate with you, including as follows:</p>
                        <ul className="list-disc ml-4">
                            <li>To send booking confirmations;</li>
                            <li>To send alerts and notifications you have subscribed to, including to your mobile device;</li>
                            <li>To solicit reviews;</li>
                            <li>To update you regarding itineraries processed by our service;</li>
                            <li>To communicate with you if you have contacted ITN customer support;</li>
                            <li>To send you information servicing and administrative emails;</li>
                            <li>To send you information about services, offered by ITN or our business partners, that we believe you would be interested in;</li>
                        </ul>

                    </div>
                    

                </div>


                <div className='bg-slate-50 mb-2 border-solid border-2 p-3' id='Change of purpose'>
                    <div>
                        <h3>Change of purpose</h3>
                    </div>
                    <div>
                        <p>We will only use your PI for the purposes for which we collected it, unless we reasonably consider that we need to use it for another reason and that reason is compatible with the original purpose. If you wish to get an explanation as to how the processing for the new purpose is compatible with the original purpose, please contact us.</p>

                    </div>
                    

                </div>


                <div className='bg-slate-50 mb-2 border-solid border-2 p-3' id='About electronic communications'>
                    <div>
                        <h3>About electronic communications</h3>
                    </div>
                    <div>
                        <p>Consistent with the above purposes and as permitted by applicable law, we may communicate with you via electronic messages, including email, text message, or mobile push notification to:</p>
                        <ul>
                            <li>Send you information relating to our products and Services. This may include booking confirmations and updates, technical notices, updates, security alerts, support, and administrative messages.</li>
                            <li>Send you marketing communications. In other situations, we may communicate with you about contests, offers, promotions, rewards, upcoming events, and other news about products and Services offered by us, our group companies, our travel partners, and other business partners.</li>
                        </ul>
                        <p><span>Email Communications</span>. From time to time, we may send you emails containing information about your apparent travel-related or activity interests. We do this to make it easy for you to take advantage of travel-related or other opportunities on our website.</p>
                        <br />
                        <p>If you no longer want to receive marketing and promotional emails from us, you may click on the “unsubscribe” link in such emails to opt out of future marketing email communications. If you have an account, you may also opt out of marketing emails in your account settings. Please note that even if you opt out of receiving marketing communications from one or all of our Services, we will still send you service-related communications, such as confirmations of any future bookings you make.</p>
                        <p><span>Push Notifications (on Mobile Devices)</span>. You can use the settings on your mobile device to enable or turn off mobile push notifications from us.</p>
                        <p><span>SMS Message Service</span>. With your consent, where required, we may contact you at the mobile phone number that you provide to us by way of direct dial calls, autodialed and prerecorded message calls, and text messages in connection with the above purposes.</p>
                        <p>By signing in to the SMS message service, you consent to receive recurring autodialed marketing texts from or on behalf of our Company at the mobile number you’ve provided to opt-in. You understand that consent is not a condition of purchase. Message & data rates may apply.</p>
                        <p>After you opt-in to receive messages online, in-person, or SMS, you can cancel the SMS service at any time by just replying <span>“STOP”</span> to the SMS message. After this, you will no longer receive SMS messages from us. Unsubscribing from our SMS service will not preclude us from sending you service-related SMS in connection with an existing booking, including us contacting you with an automated pre-recorded call containing critically important travel information (e.g., Major Schedule Change Notifications via call and/or SMS message). If you want to join again, just sign up as you did the first time, and we will start sending SMS messages to you again.</p>
                        <p>As always, message and data rates may apply for any messages sent to you from us and to us from you. Message frequency depends on the user’s interaction. If you have any questions about your text plan or data plan, it is best to contact your wireless provider.</p>
                        <p>You represent that you are the account holder for the mobile telephone number(s) that you provide. You are responsible for notifying us immediately if you change your mobile telephone number. You may notify us of a number change by contacting us via email or phone.</p>
                        <p>You agree to indemnify us in full for all claims, expenses, and damages related to or caused in whole or in part by your failure to notify us if you change your telephone number, including, but not limited to, all claims, expenses, and damages related to or arising under the Telephone Consumer Protection Act.</p>   
                    </div>
                    

                </div>

                <div className='bg-slate-50 mb-2 border-solid border-2 p-3' id='Cases of transmitting information to third parties'>
                    <div id=''>
                        <h3>Cases of transmitting information to third parties</h3>
                    </div>
                    <div>
                        <p>In case of need to transmit your data to third parties, we will take into account the following:</p>
                        <ul className="list-disc ml-4">
                            <li>Only with your consent;</li>
                            <li>If this operation is strictly necessary to provide our services;</li>
                            <li>In case it is necessary to send to a lawyer the information, to start the procedure for resolving the litigation;</li>
                            <li>In case it is necessary to protect the integrity and transparency of our company;</li>
                        </ul>
                        <p>Also, there is a possibility to share information about your personal data with our business partners. Some of these business partners may use your personal information for fraud detection found, for an email address, to detect, prevent, or otherwise address fraud, security, or technical issues. We may also share your information by asking our partner to create an application, questionnaire e.t.c, for the purpose to know the degree of your satisfaction with our services. Some of these business partners may use your personal information for online behavioral advertising purposes, or to offer you services or products that we believe you may be interested in. We may also share your information as otherwise described to you at the time of collection. We may also share anonymous aggregated usage information with partners.</p>
                    </div>
                    

                </div>


                <div className='bg-slate-50 mb-2 border-solid border-2 p-3' id='CAN SPAM act'>
                    <div id=''>
                        <h3>CAN SPAM Act</h3>
                    </div>
                    <div>
                        <p>The CAN SPAM act is a law that sets the rules for commercial email, establishes requirements for commercial messages, gives recipients the right to have email stopped from being sent to them, and spells out the tough penalties for violations.</p>
                        <p>We collect your email address in order to:</p>
                        <ul className="list-disc ml-4">
                            <li>Send information, respond to inquiries, and or other requests or questions.</li>
                            <li>Process orders and to send information and updates pertaining to orders</li>
                            <li>Send additional products and/or services based on your preferences</li>
                            <li>Market to our mailing list or continue to send emails to our clients after their original transaction has occurred</li>
                        </ul>
                        <p>In accordance with CAN SPAM, we agree to the following:</p>
                        <ul>
                            <li>Not use false or misleading subjects or email addresses</li>
                            <li>Identify the message as an advertisement in some reasonable way</li>
                            <li>Include the physical address of our business or side headquarters</li>
                            <li>Monitor third-party email marketing services for compliance, if one is used</li>
                            <li>Honor opt-out/unsubscribe requests quickly allow users to unsubscribe but using the link at the bottom of each email</li>
                        </ul>
                    </div>
                    

                </div>


                <div className='bg-slate-50 mb-2 border-solid border-2 p-3' id='Your choices'>
                    <div id=''>
                        <h3>Your choices</h3>
                    </div>
                    <div>
                        <p>As a customer-oriented business we respect and value your expectations. As a result, you are able to make announcements and queries at any time regarding your concerns in privacy matters. Each of our marketing emails has an opt-out button and you can change preferences or unsubscribe at all from such communication at any time. Each ITN website is targeted to the current audience and region, therefore subscribe/unsubscribe options are also different. You cannot unsubscribe from servicing emails and administrative messages.</p>
                        
                    </div>
                    

                </div>

                <div className='bg-slate-50 mb-2 border-solid border-2 p-3' id='How we share your personal information'>
                    <div id=''>
                        <h3>How we share your personal information</h3>
                    </div>
                    <div>
                        <p><span>Corporate affiliates and change of control:</span> We may share your PI with our corporate affiliates and if ITN itself (or part of its business) is sold or otherwise changes control, owners would have access to your PI for the uses set out herein.</p>
                        <p><span>Service providers:</span> We may share your PI with suppliers who perform services on our behalf and have agreed in writing to protect and not further disclose your information.</p>
                        <p><span>Payment service providers and travel vendors</span> If you book through the Platforms, we may share your PI with the payment service providers, acquirer banks and the travel vendors you have booked with. This can include online travel agencies, hotels, airlines, car rental companies, and travel insurance providers. These third parties will process your PI as data controllers in accordance with their own privacy policies. If you contact our customer support, they may need to share information about your request with the relevant travel vendor in order to assist you.</p>
                        <p><span>Business partners</span> We may share your PI with various business partners. Some of these business partners may use your PI for fraud detection, including, but not limited to Identifiers, Contact Data and Network Activity Information , also to detect, prevent, or otherwise address fraud, security or technical issues. We may also share your PI to ask our partner to create a survey, form, application, or questionnaire, so we know the degree of your satisfaction with our services. Some of these business partners may use your PI for online behavioral advertising purposes, or to offer you services or products that we believe you may be interested in. We may also share your information as otherwise described to you at the time of collection. We may also share anonymous aggregated usage information with partners.<br />We enter into confidentiality and PI processing terms with partners to ensure they comply with high levels of confidentiality and best practice in privacy and security standards and we regularly review these standards and practices.</p>
                        <p><span>Trips shared by you</span> If you use or have itineraries as part of our Service, you can send or grant access to your itinerary to anyone you choose. Your itinerary may contain enough details (for example, booking reference codes) to allow the recipient to cancel or modify your booking, perform a check-in, etc. You should only share your itinerary with people you trust. If you choose to display your itinerary on publicly-viewable web pages (Facebook, for instance), that information may be collected and used by others.</p>
                        <p><span>Information shared in public</span> If you provide us a review of your trip, you authorize us to publish it on all our Platforms under the screen name you provided. You also authorize us to aggregate it with other reviews.</p>
                        <p><span>Authorities</span> We may disclose PI if required by law, for example to law enforcement or other authorities. This includes court orders, subpoenas and orders arising from legal processes, and administrative or criminal investigations. We may also disclose your PI if the disclosure is necessary for the prevention, detection or prosecution of criminal acts or to prevent other damage, or in response to a legal action or to enforce our rights and claims.<br />We may also share anonymous aggregated usage information with others.</p>
                    </div>
                    

                </div>

                <div className='bg-slate-50 mb-2 border-solid border-2 p-3' id='How we store and protect your data'>
                    <div id=''>
                        <h3>How we store and protect your data</h3>
                    </div>
                    <div>
                        <p>Our servers and data centers are located in many countries and by giving us your personal information, you agree that it can be shared with other countries that may have different and/or less strict confidentiality rules. As a result, your personal information may be subject to requests for access from Governments, Courts, or Law Enforcement Agencies from these countries in accordance with the laws of these countries. According to the legislation in force in such countries, we will provide the necessary security measures to ensure the protection of your personal information.</p>
                        <p>We have adopted the appropriate security measures to avoid accidental loss, use or access to your personal data in an unauthorized manner, alteration or disclosure. In addition, we restrict access to your personal data only to those employees, agents, contractors, and other third parties who need to know the business. They will process your personal data only in accordance with our instructions and are subject to confidentiality.</p>
                        <p>If you have reason to believe that your interaction with us is no longer secure (for example, if you feel that the security of any account you might have with us has been compromised), please immediately notify us of the problem by contacting via email or phone.</p>

                    </div>
                    

                </div>

                <div className='bg-slate-50 mb-2 border-solid border-2 p-3' id='Retention periods'>
                    <div id=''>
                        <h3>Retention periods</h3>
                    </div>
                    <div>
                        <p>We will only retain your PI for as long as reasonably necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, regulatory, tax, accounting or reporting requirements. We may retain your PI for a longer period in the event of a complaint or if we reasonably believe there is a prospect of litigation in respect to our relationship with you.<br />To determine the appropriate retention period for PI, we consider the amount, nature and sensitivity of the PI, the potential risk of harm from unauthorized use or disclosure of your PI, the purposes for which we process your PI and whether we can achieve those purposes through other means, and the applicable legal, regulatory, tax, accounting or other requirements.</p>
                    </div>
                    

                </div>

                <div className='bg-slate-50 mb-2 border-solid border-2 p-3' id='Base on 2VnTravel'>
                    <div id=''>
                        <h3>Base on 2VnTravel</h3>
                    </div>
                    <div>
                        <p>2AzTravel ("us", "we", or "our") operates the http://www.2aztravel.com website (hereinafter referred to as the "Service").<br />This page informs you of our policies regarding the collection, use and disclosure of personal data when you use our Service and the choices you have associated with that data.<br />We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, the terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, accessible from http://www.2aztravel.com</p>
                    </div>
                    

                </div>

                <div className='bg-slate-50 mb-2 border-solid border-2 p-3' id='Types of data collected'>
                    <div id=''>
                        <h3>Types of data collected</h3>
                    </div>
                    <div>
                        <p>Personal Data
                        <br />While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to:
                        <br />- Email address
                        <br />- First name and last name
                        <br />- Phone number
                        <br />- Address, State, Province, ZIP/Postal code, City
                        <br />- Cookies and Usage Data
                        <br />We may use your Personal Data to contact you with newsletters, marketing or promotional materials and other information that may be of interest to you. You may opt out of receiving any, or all, of these communications from us by following the unsubscribe link or the instructions provided in any email we send.
                        </p>
                        <p>
                        Usage Data
                        <br />We may also collect information on how the Service is accessed and used ("Usage Data"). This Usage Data may include information such as your computer's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.
                        <br />
                        <br />Location Data
                        <br />We may use and store information about your location if you give us permission to do so ("Location Data"). We use this data to provide features of our Service, to improve and customize our Service.
                        <br />You can enable or disable location services when you use our Service at any time by way of your device settings.
                        <br />
                        Tracking Cookies Data
                        <br />We use cookies and similar tracking technologies to track the activity on our Service and we hold certain information.
                        <br />Cookies are files with a small amount of data which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device. Other tracking technologies are also used such as beacons, tags and scripts to collect and track information and to improve and analyze our Service.
                        <br />You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.
                        <br />
                        Examples of Cookies we use:
                        <br />- Session Cookies. We use Session Cookies to operate our Service.
                        <br />- Preference Cookies. We use Preference Cookies to remember your preferences and various settings.
                        <br />- Security Cookies. We use Security Cookies for security purposes.

                        </p>
                        <p>
                                                Use of Data
                        <br />2AzTravel uses the collected data for various purposes:
                        <br />- To provide and maintain our Service
                        <br />- To notify you about changes to our Service
                        <br />- To allow you to participate in interactive features of our Service when you choose to do so
                        <br />- To provide customer support
                        <br />- To gather analysis or valuable information so that we can improve our Service
                        <br />- To monitor the usage of our Service
                        <br />- To detect, prevent and address technical issues
                        <br />- To provide you with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless you have opted not to receive such information
                        <br />
                        Transfer of Data
                        <br />Your information, including Personal Data, may be transferred to — and maintained on — computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ from those of your jurisdiction.
                        <br />If you are located outside the United States and choose to provide information to us, please note that we transfer the data, including Personal Data, to the United States and process it there.
                        <br />Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.
                        <br />2AzTravel will take all the steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy and no transfer of your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of your data and other personal information.
                        <br />
                        Disclosure of Data
                        <br />
                        Disclosure for Law Enforcement
                        <br />Under certain circumstances, 2AzTravel may be required to disclose your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency).
                        <br />Legal Requirements
                        <br />2AzTravel may disclose your Personal Data in the good faith belief that such action is necessary to:
                        <br />- To comply with a legal obligation
                        <br />- To protect and defend the rights or property of 2AzTravel
                        <br />- To prevent or investigate possible wrongdoing in connection with the Service
                        <br />- To protect the personal safety of users of the Service or the public
                        <br />- To protect against legal liability

                        </p>
                        <p>Security of Data
                        <br />The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
                        <br />Our Policy on "Do Not Track" Signals under the California Online Protection Act (CalOPPA)
                        <br />We do not support Do Not Track ("DNT"). Do Not Track is a preference you can set in your web browser to inform websites that you do not want to be tracked.
                        <br />You can enable or disable Do Not Track by visiting the Preferences or Settings page of your web browser.
                        <br />
                        Service Providers
                        <br />We may employ third party companies and individuals to facilitate our Service ("Service Providers"), provide the Service on our behalf, perform Service-related services or assist us in analyzing how our Service is used.
                        <br />These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
                        <br />
                        Behavioral Remarketing
                        <br />2AzTravel uses remarketing services to advertise on third party websites to you after you visited our Service. We and our third-party vendors use cookies to inform, optimize and serve ads based on your past visits to our Service.
                        <br />
                        Google Ads (AdWords)
                        <br />Google Ads (AdWords) remarketing service is provided by Google Inc.
                        <br />You can opt-out of Google Analytics for Display Advertising and customize the Google Display Network ads by visiting the Google Ads Settings page: http://www.google.com/settings/ads
                        <b></b>Google also recommends installing the Google Analytics Opt-out Browser Add-on - https://tools.google.com/dlpage/gaoptout - for your web browser. Google Analytics Opt-out Browser Add-on provides visitors with the ability to prevent their data from being collected and used by Google Analytics.
                        </p>
                        <p>For more information on the privacy practices of Google, please visit the Google Privacy Terms web page: https://policies.google.com/privacy?hl=en
                        <br />Facebook remarketing service is provided by Facebook Inc.
                        <br />You can learn more about interest-based advertising from Facebook by visiting this page: https://www.facebook.com/help/164968693837950
                        <br />To opt-out from Facebook's interest-based ads, follow these instructions from Facebook: https://www.facebook.com/help/568137493302217
                        <br />Facebook adheres to the Self-Regulatory Principles for Online Behavioural Advertising established by the Digital Advertising Alliance. You can also opt-out from Facebook and other participating companies through the Digital Advertising Alliance in the USA http://www.aboutads.info/choices/, the Digital Advertising Alliance of Canada in Canada http://youradchoices.ca/ or the European Interactive Digital Advertising Alliance in Europe http://www.youronlinechoices.eu/, or opt-out using your mobile device settings.
                        <br />For more information on the privacy practices of Facebook, please visit Facebook's Data Policy: https://www.facebook.com/privacy/explanation

                        
                        </p>
                    </div>
                    

                </div>
                <div className='bg-slate-50 mb-2 border-solid border-2 p-3' id='Links to other sites'>
                    <div id=''>
                        <h3>Links to other sites</h3>
                    </div>
                    <div>
                        <p><br />Our Service may contain links to other sites that are not operated by us. If you click a third party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit.
                        <br />We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.</p>
                    </div>
                    

                </div>
                <div className='bg-slate-50 mb-2 border-solid border-2 p-3' id='Children privacy'>
                    <div id=''>
                        <h3>Children's Privacy</h3>
                    </div>
                    <div>
                        <p><br />Our Service does not address anyone under the age of 18 ("Children").
                        <br />We do not knowingly collect personally identifiable information from anyone under the age of 18. If you are a parent or guardian and you are aware that your Child has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from children without verification of parental consent, we take steps to remove that information from our servers.</p>
                    </div>
                    

                </div>
                <div className='bg-slate-50 mb-2 border-solid border-2 p-3' id='Changes to this privacy policy'>
                    <div id=''>
                        <h3>Changes to this privacy policy</h3>
                    </div>
                    <div>
                        <p><br />We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
                        <br />We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective and update the "effective date" at the top of this Privacy Policy.
                        <br />You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>
                    </div>
                    

                </div>












            </div>
        
    </div>
    <Footer/>
    </div>
      )
}

export default Main