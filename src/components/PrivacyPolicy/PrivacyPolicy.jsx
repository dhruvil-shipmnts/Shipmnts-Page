import React from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <section className="privacy-policy-container">
      <h2>Privacy Policy</h2>
      <p className="body-text-2">
        This Privacy Policy explains how Shipmnts collects, uses, and discloses information through
        its Services. We may change this Privacy Policy from time to time. If we make changes, we
        will notify you by revising the date at the top of the policy and, in some cases, we may
        provide you with additional notice (such as adding a statement to our homepage or sending
        you a notification). We encourage you to review our Privacy Policy whenever you access the
        Site or otherwise interact with us to stay informed about our information practices and the
        choices available to you.
      </p>
      <table>
        <tr>
          <td>
            <p className="body-text-2">
              <strong>Use of Information</strong>
            </p>
          </td>
          <td>
            <p className="body-text-2">
              We use the information we collect to provide, maintain, and improve our Services, such
              as to deliver and customize our services. We may also use the information we collect
              to:
            </p>
            <ul>
              <li className="body-text-2">
                detect, investigate, and prevent fraudulent transactions and other illegal
                activities and protect the rights and property of Shipmnts;
              </li>
              <li className="body-text-2">
                determine what products you might be interested in order to craft solutions to
                business problems;
              </li>
              <li className="body-text-2">
                track communication preferences, so that communications are aligned with your wishes
              </li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>
            <p className="body-text-2">
              <strong>Sharing of Information</strong>
            </p>
          </td>
          <td>
            <p className="body-text-2">
              We may share information we collect as follows or as otherwise described in this
              Privacy Policy:
            </p>
            <ul>
              <li className="body-text-2">
                With vendors, consultants and other service providers who need access to such
                information to carry out work on our behalf;
              </li>
              <li className="body-text-2">
                In response to a request for information if we believe disclosure is in accordance
                with, or required by, any applicable law, regulation or legal process;
              </li>
              <li className="body-text-2">
                If we believe your actions are inconsistent with our user agreements or policies, or
                to protect the rights, property and safety of Shipmnts;
              </li>
              <li className="body-text-2">
                Between and among Shipmnts and our current and future parents, affiliates,
                subsidiaries and other companies under common control and ownership; and
              </li>
              <li className="body-text-2">
                At your direction we may also share aggregated or de-identified information, which
                cannot reasonably be used to identify you.
              </li>
            </ul>
          </td>
        </tr>
        <tr>
          <td></td>
          <td className="body-text-2">
            If you have any questions related to the use and disclosure of personal information
            please contact us at: support@shipmnts.com
          </td>
        </tr>
      </table>
    </section>
  );
};

export default PrivacyPolicy;
