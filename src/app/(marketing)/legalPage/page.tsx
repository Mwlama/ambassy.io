"use client";

import { AnimationContainer } from '@/components';
import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  background-color:;
  color: #ffffff;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const TableOfContents = styled.div`
  width: 250px;
  padding-right: 20px;
  border-right: 1px solid #333;
`;

const TableOfContentsItem = styled.a`
  color: rgb(182, 34, 140);
  text-decoration: none;
  display: block;
  margin-bottom: 10px;

  &:hover {
    text-decoration: underline;
  }
`;

const Content = styled.div`
  padding-left: 20px;
  flex: 1;
`;

const Header = styled.h1`
  color: rgb(206, 206, 206);
`;

const Section = styled.div`
  margin-bottom: 20px;
`;

const SectionHeader = styled.h2`
  color: rgb(182, 34, 140);
`;

const SectionContent = styled.p`
  color: #ffffff;
`;

const Page: React.FC = () => {
  return (
    <div className="overflow-x-hidden scrollbar-hide size-full">
      <Container>
        <TableOfContents>
          <TableOfContentsItem href="#framework-terms">FRAMEWORK TERMS</TableOfContentsItem>
          <TableOfContentsItem href="#background">BACKGROUND</TableOfContentsItem>
          <TableOfContentsItem href="#meanings">1. MEANINGS</TableOfContentsItem>
          <TableOfContentsItem href="#our-agreement">2. OUR AGREEMENT</TableOfContentsItem>
          <TableOfContentsItem href="#duration-of-our-agreement">3. DURATION OF OUR AGREEMENT</TableOfContentsItem>
          <TableOfContentsItem href="#services">4. SERVICES</TableOfContentsItem>
          <TableOfContentsItem href="#what-you-are-required-to-do">5. WHAT YOU ARE REQUIRED TO DO</TableOfContentsItem>
          <TableOfContentsItem href="#what-each-party-promises">6. WHAT EACH PARTY PROMISES IN RELATION TO THE AGREEMENT</TableOfContentsItem>
          <TableOfContentsItem href="#fees-change-control">7. FEES; CHANGE CONTROL</TableOfContentsItem>
          <TableOfContentsItem href="#unavailability-of-content-creators">8. UNAVAILABILITY OF CONTENT CREATORS</TableOfContentsItem>
          <TableOfContentsItem href="#non-dealing">9. NON-DEALING</TableOfContentsItem>
          <TableOfContentsItem href="#confidentiality">10. CONFIDENTIALITY</TableOfContentsItem>
          <TableOfContentsItem href="#intellectual-property">11. INTELLECTUAL PROPERTY</TableOfContentsItem>
          <TableOfContentsItem href="#termination">12. TERMINATION</TableOfContentsItem>
          <TableOfContentsItem href="#liability">13. LIABILITY</TableOfContentsItem>
          <TableOfContentsItem href="#indemnity">14. INDEMNITY</TableOfContentsItem>
          <TableOfContentsItem href="#general">15. GENERAL</TableOfContentsItem>
        </TableOfContents>
        <Content>
          {/* Hero Section */}
          <section className="relative flex items-center justify-center overflow-hidden bg-transparent">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="mx-auto flex max-w-5xl flex-col items-center justify-center px-4 text-center relative z-10"
            >
              <AnimationContainer delay={0.1}>
                <h1 className="text-2xl md:text-4xl lg:text-4xl font-semibold font-heading text-center mt-0 !leading-tight">
                  COMPANY: CONTENT CREATOR TERMS AND CONDITIONS
                </h1>
              </AnimationContainer>
            </motion.div>
          </section>

          <Section id="framework-terms">
            <SectionHeader>FRAMEWORK TERMS</SectionHeader>
            <SectionContent>
              A. All references to “Company,” “Ambassy.io,” &quot;us&quot; or “our” (such expressions including any successors in title and assigns) in these Framework Terms shall refer exclusively to the specific Company as set out in the applicable Work Order:
              <br /><br />
              AMBASSY.IO (company registration number: LATER) with registered office at DUBAI Silicon Oasis.
              <br /><br />
              Ambassy.io is an online platform that connects medium content creators with online shops. Shop owners choose the commission percentage (e.g., 5%, 10%, 20%) based on the sales made by the creators. If there are no sales, the creators receive no payments.
            </SectionContent>
          </Section>

          <Section id="background">
            <SectionHeader>BACKGROUND</SectionHeader>
            <SectionContent>
              A. Ambassy.io is an online platform that connects medium content creators with online shops. Shop owners choose the commission percentage (e.g., 5%, 10%, 20%) based on the sales made by the creators. If there are no sales, the creators receive no payments.
              <br /><br />
              B. You wish to register to Ambassy.io’s proprietary influencer Platform to participate in campaigns or, in the case of a manager and/or an agency (where applicable), so that your Represented Creator can participate in such campaigns.
              <br /><br />
              C. These terms and conditions form the agreement between you and Ambassy.io, or as the case applies, between, on the one hand, Ambassy.io, and, on the other, Agent and its Represented Creator, in connection with the participation of any Campaign(s) through our Platform.
            </SectionContent>
          </Section>

          <Section id="meanings">
            <SectionHeader>1. MEANINGS</SectionHeader>
            <SectionContent>
              1.1 The defined terms in these terms and conditions shall have the following meanings:
              <br /><br />
              <strong>Agent:</strong> means the manager, agent, or appointed representative of Represented Creator.
              <br /><br />
              <strong>Agreement:</strong> means the binding agreement between Ambassy.io and you, or as the case applies, between Ambassy.io, Agent and its Represented Creator, which is made up of these Framework Terms together with each applicable Work Order as agreed between the parties from time to time. For clarity, each agreed Work Order shall form a separate Agreement incorporating these Framework Terms.
              <br /><br />
              <strong>Brand:</strong> means the brand (in some instances, we may be working with this Brand via a third-party partner) that you are promoting as part of the Services, or as the case applies, that Agent and its Represented Creator are promoting as part of the Services, in relation to an influencer marketing Campaign as detailed in a Work Order.
              <br /><br />
              <strong>Change(s):</strong> means any changes required by Ambassy.io and/or Brand in connection with a Deliverable (or Deliverables) provided by you, Agent and/or Represented Creator (as applicable) further to a Work Order in accordance with clause 7.4.
              <br /><br />
              <strong>Campaign(s):</strong> means the influencer marketing campaign (or campaigns) involving a Brand and you, or as the case applies, involving a Brand and Agent and/or its Represented Creator, as detailed in each Work Order.
              <br /><br />
              <strong>Campaign Term:</strong> means the duration of the applicable Campaign as detailed in each Work Order.
              <br /><br />
              <strong>Confidential Information:</strong> means confidential and proprietary information and trade secrets, including without limitation, software and hardware designs and specifications, equipment, software (including not by way of limitation source and binary code), plans, drawings, data, prototypes, discoveries, research, developments, processes, procedures, intellectual property and information relating to customers, marketing plans and future products, business data, internal organizational structure, methods of operations, business processes, forecasts, and financial information and such other information disclosed pursuant to conditions of confidentiality, whether disclosed prior to, upon or after execution of this Agreement.
              <br /><br />
              <strong>Deliverables:</strong> means the proceeds of your, or as applicable, Agent and its Represented Creator&apos;s, Services as required in connection with each Campaign and as detailed in each Work Order.
              <br /><br />
              <strong>Fees:</strong> means the applicable compensation in connection with a Campaign as set out in a Work Order and payable in accordance with clause 7.
              <br /><br />
              <strong>Framework Terms:</strong> means these terms and conditions.
              <br /><br />
              <strong>Ambassy.io Affiliate:</strong> means any affiliate or group entities of Ambassy.io, including without limitation Ambassy.io Inc, and, in each case, each of its respective successors, and/or assigns.
              <br /><br />
              <strong>Ambassy.io Materials:</strong> means any materials or information owned by or licensed to Ambassy.io and/or Brand that are provided to you, or as applicable, are provided to Agent and its Represented Creator, and each of your, or as applicable each of Agent’s and/or its Represented Creator&apos;s, respective associates in connection with this Agreement.
              <br /><br />
              <strong>Intellectual Property Rights:</strong> means any and all present and future, patents, inventions, know-how, trade secrets and other confidential information, trademarks, service marks, logos, emblems, badges, mascots, insignia, identifying music and sounds, get-up, domain names, business names, trade names, moral rights, performance rights, registered designs, copyrights, database rights, the sui generis rights of extraction relating to databases, design rights and other intellectual property rights of whatever nature, in each case whether registered or unregistered and including applications for registration, and all rights or forms of protection having equivalent or similar effect anywhere in the world.
              <br /><br />
              <strong>Media:</strong> any website, social media platform or place where Deliverables are posted and/or displayed including but not limited to those specific sites detailed in each Work Order.
              <br /><br />
              <strong>Personal Data:</strong> has the meaning given to such term in the UK GDPR and includes any other information which is subject to other data protection, privacy or similar laws or regulations as may be applicable.
              <br /><br />
              <strong>Platform:</strong> means Ambassy.io’s proprietary technology which enables registered content creators to engage in commercial opportunities with Brands, namely execute Campaigns and facilitate Deliverable submissions, approval, and performance.
              <br /><br />
              <strong>Process:</strong> has the meaning given to such term in the UK GDPR.
              <br /><br />
              <strong>Represented Creator:</strong> means those content creators that Agent represents and that Agent is authorised to act for and on behalf of in connection with procuring commercial opportunities, namely in connection with the Campaign(s), and which Agent wishes to register to the Platform and/or to perform the Services as required in each Work Order.
              <br /><br />
              <strong>Services:</strong> means the services that you, or as applicable, that Agent and its Represented Creator are required to provide in connection with a Campaign (including but not limited to the provision of the Deliverables) as detailed in each Work Order.
              <br /><br />
              <strong>Term:</strong> means the duration of Agreement between Ambassy.io and you or, as applicable, between Ambassy.io, on the one hand, and Agent and its Represented Creator, on the other, as detailed in clause 3.1.
              <br /><br />
              <strong>Territory:</strong> means the territory applicable to each Agreement as detailed in a Work Order.
              <br /><br />
              <strong>UK GDPR:</strong> means the version of the European General Data Protection Regulation (2016/679) retained in the United Kingdom by virtue of section 3 of the European Union (Withdrawal) Act of 2018.
              <br /><br />
              <strong>Work Order:</strong> means the statement of work or creator brief accessed and agreed between the parties from time to time through the Platform which shall include (without limitation): (i) the scope and details of each Campaign(s); (ii) the required Services in relation to each Campaign(s); (iii) the commercial terms of the Agreement as relevant to each Campaign(s), including but not limited to details such as Fees, Deliverables, usage rights and related usage periods, exclusivity, relevant media channels and Campaign Term(s).
            </SectionContent>
          </Section>

          <Section id="our-agreement">
            <SectionHeader>2. OUR AGREEMENT</SectionHeader>
            <SectionContent>
              2.1 The Parties have agreed to work together on these Framework Terms.
              <br /><br />
              2.2 From time to time, the Parties may agree a Work Order through the Platform.
              <br /><br />
              2.3 Each Work Order shall be accessible and agreed through our Platform and shall integrate these Framework Terms. These Framework Terms shall also apply to any provision of services by Ambassy.io to you.
            </SectionContent>
          </Section>

          <Section id="duration-of-our-agreement">
            <SectionHeader>3. DURATION OF OUR AGREEMENT</SectionHeader>
            <SectionContent>
              3.1 The Term of our Agreement shall begin on the date set out in a Work Order and shall continue, subject to clause 3.2, unless terminated in accordance with clause 12.
              <br /><br />
              3.2 Unless this Agreement is terminated in accordance with clause 12, this Agreement shall expire at the end of a Campaign Term as set out in a Work Order. If this Agreement is due to expire or terminate during a Campaign Term, the Term of this Agreement shall automatically be extended until the end of such Campaign Term. For further clarity, you may not end this Agreement whilst a Campaign Term is still live unless clause 12 applies.
            </SectionContent>
          </Section>

          <Section id="services">
            <SectionHeader>4. SERVICES</SectionHeader>
            <SectionContent>
              4.1 In consideration of your Services, or as the case applies, in consideration of Agent’s and/or Represented Creator&apos;s Services, Ambassy.io shall pay the Fees as set out in a Work Order in accordance with clause 7 to an account chosen by you or, as applicable, to the account chosen by Agent or by Represent Creator.
              <br /><br />
              4.2 During the Campaign Term, you agree to provide the Services described in a Work Order or, where applicable, Agent shall procure that Represented Creator provides the Services as described in a Work Order, time being of the essence, with all reasonable and due care and skill and subject to the terms of this Agreement.
            </SectionContent>
          </Section>

          <Section id="what-you-are-required-to-do">
            <SectionHeader>5. WHAT YOU ARE REQUIRED TO DO</SectionHeader>
            <SectionContent>
              5.1 You, or as applicable, Agent and its Represented Creator, agree to co-operate with and act in good faith towards Ambassy.io and, where necessary, provide such materials including those Deliverables listed in the Work Order as Ambassy.io require to incorporate into the Services or Ambassy.io requires to carry out its obligations.
              <br /><br />
              5.2 You, or as the case applies, Agent and its Represented Creator, agree to keep the applicable page and/or profile on which the Deliverables are posted on the relevant Media accessible to the public (i.e., not private) for the duration of the Campaign Term as set out in the Work Order.
              <br /><br />
              5.3 You, or as the case applies, Agent and its Represented Creator, will at any time during or after the Term, upon our request, promptly edit, remove, or delete any Deliverables as requested.
              <br /><br />
              5.4 You, or as the case applies, Agent and its Represented Creator, understand and agree that the Deliverables are subject to the Brand’s final approval in connection with each relevant Campaign, such approval not to be unreasonably withheld. You understand and agree, or as applicable, Agent procures that Represented Creator understands and agrees, to make any Change(s) or amendments to the Deliverables to rectify any inaccuracies before posting the same on the applicable Media set out in the Work Order and in accordance with clause 7.4. You shall not, or as the case applies, Agent shall not and procure that its Represented Creator shall not, make untruthful, unsubstantiated, or unapproved statements or claims regarding Brand or its products and/or services.
              <br /><br />
              5.5 The Deliverables shall disclose the sponsored nature of the relationship between you, or as applicable, Represented Creator, and the Brand in respect of the Services by disclosing the Deliverables &apos;#ad&apos; or ‘AD’ as appropriate and, as may be directed by Ambassy.io and/or Brand, together with any available ‘in-platform’ tools that disclose the paid nature of the applicable marketing communication.
              <br /><br />
              5.6 You, or as the case applies, Agent and/or its Represented Creator, will need to register to the Platform in order to submit all Deliverables in accordance with a Work Order so that Ambassy.io, any Ambassy.io Affiliate, and/or Brand can record their approval(s) of the Deliverables.
              <br /><br />
              5.7 Where required, you shall, or as the case applies, Agent procures that its Represented Creator shall, agree to link the relevant user account with a valid Facebook, Instagram, YouTube, Twitter or such other social media account as applicable (such service, a “Third-Party Service” and each such account, a “Third-Party Account”) by allowing Ambassy.io to access your or Represented Creator&apos;s (as applicable) Third-Party Account, as is permitted under the applicable terms and conditions that govern the use of each Third-Party Account, so that Ambassy.io can track performance of Deliverables in relation to any given Campaign.
            </SectionContent>
          </Section>

          <Section id="what-each-party-promises">
            <SectionHeader>6. WHAT EACH PARTY PROMISES IN RELATION TO THE AGREEMENT</SectionHeader>
            <SectionContent>
              6.1 You, or as the case applies, Agent and its Represented Creator, warrant, and represent that:
              <br /><br />
              6.1.1 you, or Represented Creator (as applicable), are able to provide the Services and have the legal capacity to enter into this Agreement and that by doing so you, or Represented Creator (as applicable), will not be in breach of any obligation to or right of a third party;
              <br /><br />
              6.1.2 you, or Represented Creator (as applicable), have the necessary skills and knowledge to carry out the Services under this Agreement;
              <br /><br />
              6.1.3 you, or Represented Creator (as applicable), are solely responsible for all VAT(if applicable), income tax and national insurance contributions or social security due in respect of provision of the Services under this Agreement and shall timely remit payment of all such VAT (if applicable), income tax and national insurance contributions (NIC) or social security in each jurisdiction in which such taxes, contributions or obligations are due and payable;
              <br /><br />
              6.1.4 you or Represented Creator shall reimburse Ambassy.io in respect of any tax, social security contributions or amount in respect of tax (including UAE income tax and NIC) which Ambassy.io is required to account to any tax authority in connection with this Agreement or any other past, present or future agreement between Ambassy.io and you, or Represented Creator (as applicable);
              <br /><br />
              6.1.5 you, or Represented Creator (as applicable), do not and will not artificially increase follower or subscriber counts by buying followers or by using other artificial means such as the use of “bots” or similar;
              <br /><br />
              6.1.6 the Services shall be provided in accordance with the Work Order (and as otherwise set out in this Agreement) and such Services shall be provided with all due care, skill and ability;
              <br /><br />
              6.1.7 the manner in which the Deliverables are used on the Media will not have any adverse effect on Ambassy.io, any Ambassy.io Affiliate and/or the Brand. You, or Represented Creator (as applicable), shall not use the Deliverables or any Ambassy.io Materials in any derogatory, discriminatory, violent, racist, offensive or otherwise illegal manner;
              <br /><br />
              6.1.8 as of the effective date of this Agreement, there are no reasons, acts or omissions that you, or Represented Creator (as applicable), have undertaken which brings, or is likely to bring, Ambassy.io, any Ambassy.io Affiliate and/or Brand (at Ambassy.io and/or Brands sole reasonable discretion) into disrepute, scandal or embarrassment, including without limitation any connection with any criminal activity;
              <br /><br />
              6.1.9 the Deliverables will not, when used in accordance with this Agreement, infringe the intellectual property rights (including without limitation copyright, trade mark, or rights of publicity) or other rights of any third party (including rights relating to Personal Data) and will comply with all applicable laws and regulations, including without limitation any guidelines in place from time to time issued by the Advertising Standards Authority (ASA) and/or the Competition and Markets Authority (CMA) in connection with marketing communications, and any other relevant law, rule, guidelines, or regulation applicable to the display or publication of advertisements or marketing communications as issued or in place from time to time pursuant to any other government or regulatory body that regulates advertising within your, or as applicable, Represented Creator’s, local country and/or industry; or applicable data protection, privacy or similar laws or regulations;
              <br /><br />
              6.1.10 where required and on Ambassy.io’s request, you, or as the case applies, Agent and/or its Represented Creator, shall provide Ambassy.io with full details of the performance of the Deliverables including but not limited to viewer engagements, likes, impressions and views;
              <br /><br />
              6.1.11 you, or Represented Creator (as applicable), confirm that you are not, or, in the case of Represented Creator, they are not, a member of any guild, union or similar organization such that the use of your, or Represented Creator&apos;s (as applicable), image rights as may be comprised of the Services, including without limitation, biographical materials, statements or testimonials as contemplated under this Agreement would trigger any guild, union or third party payments or other obligations. In the event this status changes, you, or Represented Creator (as applicable) agree to notify us immediately.
              <br /><br />
              6.1.12 unless prevented by ill health or accident, you, or as the case applies, Represented Creator, shall devote such time as is necessary to the carrying out of the Services as may be necessary for their proper performance;
              <br /><br />
              6.1.13 should any third parties be hired by you, or as the case applies, hired by Agent and/or Represented Creator (as applicable), in connection with the Services, such third parties will be subject to the prior written approval of Ambassy.io and/or Brand, such approval not to be unreasonably withheld or delayed;
              <br /><br />
              6.1.14 you, or as the case applies, Agent and/or Represented Creator (as applicable), shall obtain such licences, waivers or consents in respect of existing materials (excluding Ambassy.io Materials) incorporated into the Deliverables as shall be necessary in order that Ambassy.io and/or Brand can use the Deliverables for the purposes set out in this Agreement and in accordance with applicable laws and regulations (including laws relating to Personal Data);
              <br /><br />
              6.1.15 you will advise Ambassy.io, as soon as reasonably practicable, in the event that you, or as the case applies, Represented Creator (as applicable), are/is unable to provide the Services due to illness, injury or other emergency;
              <br /><br />
              6.1.16 you shall not transfer Personal Data to Ambassy.io or Ambassy.io Affiliates except in accordance with applicable data protection, privacy or similar laws or regulations;
              <br /><br />
              6.1.17 you, or Represented Creator (as applicable), shall be responsible for providing accurate details and maintaining such up to date details with respect to your account on the Platform, including without limitation, applicable payment details and tax residency status. Should your, or Represented Creator’s (as applicable), tax residency status change, you understand that it is your responsibility to inform Ambassy.io of such changes.
              <br /><br />
              6.2 Ambassy.io warrants and undertakes that it shall be responsible for the management of and communication with the Brand and that it shall provide you, or as the case applies, provide Agent and/or its Represented Creator (as applicable), with the Brand’s creative briefs in relation to the applicable Campaign and in connection with the Services.
            </SectionContent>
          </Section>

          <Section id="fees-change-control">
            <SectionHeader>7. FEES; CHANGE CONTROL</SectionHeader>
            <SectionContent>
              7.1 In consideration of the Services that you provide to Ambassy.io in connection with any Campaign, Ambassy.io shall pay you the Fees set out in each Work Order (plus VAT if applicable) within fourteen (14) days completion of the Services and subject to: (i) payment from the Brand for services rendered in connection with the relevant Campaign; and (ii) the receipt of a valid invoice, or otherwise in accordance with the payment terms set out in the relevant Work Order. If you have any questions about payment for a campaign you worked on, click here.
              <br /><br />
              7.2 You, or Represented Creator (as applicable), shall be responsible for making all deductions from payments and Fees received in relation to this Agreement and performing all acts and making all payments necessary under any relevant tax legislation. For the avoidance of doubt, Ambassy.io shall not make such deductions from the Fees.
              <br /><br />
              7.3 Ambassy.io may deduct amounts from the Fees in the event that:
              <br /><br />
              7.3.1 you, Represented Creator (as applicable), fail to properly and/or on time provide Ambassy.io or any Ambassy.io Affiliate the Deliverables and/or comply with any reasonable instructions set out in a Work Order as reasonably required for the timely supply of the Services (provided always that such failure to provide the Deliverables is not the direct result of Ambassy.io and/or Brand’s material failure to comply with its obligations toward you and/or Represented Creator (as applicable));
              <br /><br />
              7.3.2 there are unforeseen changes to the cost of Services and/or other circumstances outside of Ambassy.io’s reasonable control, for example where a Brand has decided to cancel or otherwise not proceed with a Campaign or part thereof except that, in this case, Ambassy.io shall use all reasonable efforts to ensure that the Brand pays you, or as the case applies, Agent and/or Represented Creator (as applicable), a pro rata portion of the Fees for any Services provided up until the date of termination/ cancellation provided always that such termination/cancellation is not due to your and/or Represented Creator&apos;s (as applicable) material breach of obligations under this Agreement;
              <br /><br />
              7.3.3 the parties agree to any variations to the Services in writing.
              <br /><br />
              7.4 Ambassy.io will have the right to request that you, or Represented Creator (as applicable), make Change(s) to the Deliverables and/or products of the Services that are reasonably required to bring the Deliverables / Services into scope of the Brand’s creative brief as applicable to the relevant Campaign. Ambassy.io will exercise such right to request Change(s) reasonably and principally where you, or Represented Creator (as applicable), have deviated from any creative brief provided by Ambassy.io. You, or as the case applies, Agent and/or Represented Creator (as applicable), agree to implement such Change(s) as reasonably required by Ambassy.io and acknowledge that the Brand shall have final approval rights before the posting of any Deliverable(s) on the applicable Media pursuant to any Campaign(s). You, or as the case applies, Agent and/or Represented Creator (as applicable), understand and agree that the Deliverables shall not be posted until the Deliverables and any associated content have been approved by Ambassy.io and/or the Brand. Unless otherwise agreed in writing between the parties, any and all Change(s) shall be inclusive of the Fees payable hereunder. Ambassy.io and/or Brand shall not be required to pay any additional fees for any Change(s) as may be reasonably required from time to time.
            </SectionContent>
          </Section>

          <Section id="unavailability-of-content-creators">
            <SectionHeader>8. UNAVAILABILITY OF CONTENT CREATORS</SectionHeader>
            <SectionContent>
              In the event that you, or as the case applies, Represented Creator, are unavailable or unwilling to provide the Services, you agree to inform Ambassy.io immediately and will work with Ambassy.io in good faith to find a suitable solution in order to provide the Services. In the case of a manager and/or an agency, you agree to replace Represented Creator with a suitable alternative with Ambassy.io’s prior written approval. In the event that the parties cannot agree a suitable alternative, Ambassy.io may terminate this Agreement subject to paying you, or Represented Creator (as applicable), a reasonable pro rata portion of the Fees for Services provided but not yet paid for and/or any prior agreed expenses incurred up to that date.
            </SectionContent>
          </Section>

          <Section id="non-dealing">
            <SectionHeader>9. NON-DEALING</SectionHeader>
            <SectionContent>
              Unless otherwise specified in a Work Order, in order to protect the legitimate business interests of Ambassy.io, you represent or, as applicable, you procure that Represented Creator represents, with Ambassy.io that you, and/or Represented Creator, shall not for the Term and a period of 12 months after the Term directly deal with a Brand for which you, or Represented Creator (as applicable), have provided Services to in connection with this Agreement without Ambassy.io’s prior written approval.
            </SectionContent>
          </Section>

          <Section id="confidentiality">
            <SectionHeader>10. CONFIDENTIALITY</SectionHeader>
            <SectionContent>
              10.1 The Parties may disclose to each other and their designated agents and/or advisors Confidential Information as may be required for the performance of the Services and execution of a Campaign.
              <br /><br />
              10.2 Each party undertakes that it will keep secret and confidential the terms of this Agreement and any Confidential Information supplied by either party in connection with this Agreement or in connection with the business of the other and in connection with the Services and Campaign and shall only disclose such information or part thereof (except to its own employees and advisers and then only on a need to know basis) with the other party’s prior written consent PROVIDED THAT this clause shall not extend to information which was and can be shown to be rightfully in the possession of the receiving party prior to the commencement of the negotiations leading to this Agreement or which is in the public domain (other than as a result of a breach of this clause).
            </SectionContent>
          </Section>

          <Section id="intellectual-property">
            <SectionHeader>11. INTELLECTUAL PROPERTY</SectionHeader>
            <SectionContent>
              11.1 Subject to the remainder of this clause 11 and unless otherwise agreed in a Work Order, you, or as the case applies, Represented Creator, will retain all Intellectual Property Rights in the content created in the provision of the Services, excluding any Intellectual Property Rights in Ambassy.io Materials provided by Ambassy.io and/or the Brand which shall remain the property of Ambassy.io and/or the Brand (as applicable).
              <br /><br />
              11.2 You, or as the case applies, Agent and Represented Creator, agree that the Deliverables must be kept on the relevant Media in the Territory for the duration of the Campaign Term and any usage periods specifically set out in the relevant Work Order which shall, unless otherwise stated in a Work Order, be a minimum of 12 months from the date of posting the relevant Deliverable on the Media (subject always to the terms and conditions of the relevant Media platform).
              <br /><br />
              11.3 If a Work Order indicates that Ambassy.io and/or Brand may use the Deliverables on its own channels, it is the intention of the parties that Ambassy.io and/or Brand hold a licence to use and exploit such Deliverables in accordance with the terms set out in the Work Order. You, or as the case applies, Agent and/or Represented Creator, shall grant to Ambassy.io and/or Brand an irrevocable royalty-free licence to use and exploit the Deliverables for the purpose described in the Work Order in the Territory and on the applicable Media set out in the Work Order.
              <br /><br />
              11.4 Notwithstanding the expiry of any licence granted further to clause 11.3 above, you, or Represented Creator (as applicable), agree that Ambassy.io and/or Brand may continue to use the Deliverables and/or the proceeds of your Services in perpetuity and on a royalty free basis strictly for non-commercial purposes, including but not limited to intra-company, research, award, press, publicity, file and/or reference purposes. For the avoidance of doubt, Ambassy.io and/or Brand shall not be obliged to take down or otherwise remove any posts comprising the Deliverables from its owned and/or operated channels which have been used in accordance with any usage provisions set out in a Work Order during the Campaign Term.
              <br /><br />
              11.5 Where applicable, you, or as the case applies, Agent and its Represented Creator, acknowledge and agree that in order to promote you and/or Represented Creator (as applicable) to our commercial network of Brands and to maximise commercial opportunities available to you and/or Represented Creator as part of Ambassy.io&apos;s content creator community, we may use, in any and all media now known or hereafter devised, your and/or Represented Creator&apos;s approved name, picture, image, likeness, social media handle(s), avatar(s), signature, voice, and biographical information, as incorporated into the Deliverables and/or other social media content, in their original or modified form, provided always that such use is for non-commercial purposes and credits you and/or Represented Creator (as applicable), in accordance with the terms of this Agreement.
              <br /><br />
              11.6 You, or as the case applies, Agent and its Represented Creator, expressly acknowledge that it is forbidden to use the Deliverables in connection with any racist, defamatory or obscene material (including, without limitation, pornographic material) or other legally restricted material.
              <br /><br />
              11.7 Ambassy.io grants you and/or Represented Creator (as applicable) a non-exclusive royalty free licence to use the Ambassy.io Materials for all purposes relating to this Agreement and warrants that it is fully entitled to grant you and/or Represented Creator (as applicable) these rights and that the Ambassy.io Materials are free of racist, defamatory, obscene and other legally restricted material.
            </SectionContent>
          </Section>

          <Section id="termination">
            <SectionHeader>12. TERMINATION</SectionHeader>
            <SectionContent>
              12.1 Either party shall be entitled to terminate this Agreement upon the other party’s material breach (including without limitation non-payment of any sum due) unless the breaching party remedies such breach within fourteen (14) days written notice of its occurrence.
              <br /><br />
              12.2 Neither party will be liable in any amount for failure to perform any obligation hereunder if such failure is caused by the occurrence of any unforeseen contingency beyond the reasonable control of such party including without limitation, internet outages, pandemic, communications outages, fire, flood, war or act of God. In such circumstances the affected party shall be entitled to a reasonable extension of time for performing such obligations. If the period of delay or non-performance continues for a period of more than one (1) month, the party not affected may terminate the Term of this agreement by giving fourteen (14) days’ written notice to the affected party.
              <br /><br />
              12.3 You, or as the case applies, Agent and/or its Represented Creator, may not cancel its order of the Services or otherwise terminate this Agreement (save for a proven material breach by Ambassy.io of a fundamental term of this Agreement) at any time.
              <br /><br />
              12.4 You, or as the case applies, Agent and/or its Represented Creator, acknowledge that in, under some circumstances and due to the nature of individual Campaigns, a Brand may have the right to suspend or cease the Campaign. In which case, Ambassy.io shall have the right to terminate this Agreement on written notice to you, or Represented Creator (as applicable), subject to the provisions of clause 7.3.2.
              <br /><br />
              12.5 Upon expiry and/or termination of this Agreement:
              <br /><br />
              12.5.1 you and/or Represented Creator (as applicable) agree to return to Ambassy.io any Confidential Information and/or Ambassy.io Materials in your possession;
              <br /><br />
              12.5.2 any term of this Agreement which is intended to survive the Term shall continue to apply on or after such expiry or ending of the Agreement, including without limitation clauses 1, 6,7,9,10,11,12,13,14 and 15.
            </SectionContent>
          </Section>

          <Section id="liability">
            <SectionHeader>13. LIABILITY</SectionHeader>
            <SectionContent>
              13.1 Subject to Clause 13.2 below, Ambassy.io’s liability to you, or as the case applies, to Agent and/or Represented Creator (as applicable) for any loss or damage direct or otherwise and howsoever caused whether in tort (including negligence), contract or otherwise shall not exceed the Fees invoiced by you and/or Represented Creator (as applicable) to Ambassy.io for the Services under the Work Order to which such liability relates.
              <br /><br />
              13.2 Neither party shall be liable to the other party for any indirect or consequential loss or damage SAVE THAT nothing in this Agreement shall exclude or in any way limit either party’s liability for fraud, death or personal injury caused by its negligence or any other liability to the extent the same may not be excluded or limited as a matter of law.
              <br /><br />
              13.3 When instructions or advice are given or received orally by Ambassy.io, it shall have no liability to you and/or Represented Creator (as applicable) for any misunderstanding or representation which may arise in relation thereto except in relation to fraudulent misrepresentations.
            </SectionContent>
          </Section>

          <Section id="indemnity">
            <SectionHeader>14. INDEMNITY</SectionHeader>
            <SectionContent>
              You, or as the case applies, Represented Creator, undertake to Ambassy.io to indemnify and hold harmless Ambassy.io and/or Brand in full and defend at its own expense Ambassy.io and/or Brand against all costs, damages and losses incurred by it arising out of its use of the Deliverables or breach of clauses 6.1.1 to 6.1.17 (inclusive).
            </SectionContent>
          </Section>

          <Section id="general">
            <SectionHeader>15. GENERAL</SectionHeader>
            <SectionContent>
              15.1 The Parties understand that Ambassy.io is an independent contractor with respect to you and/or Represented Creator (as applicable), and this Agreement creates no agency, partnership or joint venture relationship between the Parties. Neither party shall have express or implied authority to act on behalf of or make any representations whatsoever on behalf of the other. You, or Represented Creator (as applicable), understand that Ambassy.io has other clients and that Ambassy.io may offer similar services to other clients.
              <br /><br />
              15.2 Except as specifically set forth herein, this Agreement may be amended or terminated only by a written instrument executed by an authorized officer of Ambassy.io and you.
              <br /><br />
              15.3 If at any time any part of this Agreement is or becomes unenforceable, such part will be construed as far as possible to reflect the Parties’ intentions and the remainder of the provisions will remain in full force and effect.
              <br /><br />
              15.4 No person who is not a party to this Agreement shall be entitled to enforce any of the terms pursuant to the Contracts (Rights of Third Parties) Act 1999.
              <br /><br />
              15.5 You, or as the case applies, Agent and its Represented Creator, acknowledge that Ambassy.io and/or Ambassy.io Affiliates will Process your, or as the case applies, the Agent’s and its Represented Creator&apos;s, Personal Data and will do so in accordance with the privacy notice available here: [Insert Privacy Policy URL].
              <br /><br />
              15.6 Ambassy.io may, at any time, assign the benefit and/or burden or otherwise delegate any of its rights and obligations under this Agreement to any Ambassy.io Affiliate provided that Ambassy.io will procure that such Ambassy.io Affiliate will be bound by the same terms of this Agreement. In such cases, the Ambassy.io Affiliate will assume all the rights, obligations, liabilities, and benefits of Ambassy.io under the Agreement as if it were the original party to it in place of Ambassy.io. You, or as the case applies, Agent and/or its Represented Creator, shall not assign the benefit or burden of this Agreement without the prior written consent of Ambassy.io.
              <br /><br />
              15.7 During the Term of this Agreement and for the twelve (12) month period following its termination, neither party shall directly or indirectly solicit, offer employment, employ or retain as a consultant any employee or former employee of the other party who has participated directly in the Services without the prior written consent of the other party.
              <br /><br />
              15.8 Ambassy.io may update these Framework Terms from time to time and place a new version on the Platform. When Ambassy.io does so, we may send you a notification advising that these Framework Terms have been updated on our page located at [Insert Terms and Conditions URL]. Your, or as the case applies, Agent’s and/or Represented Creator&apos;s, use of the Platform from the date that the amended terms are placed on the Platform onwards will be governed by those new terms.
              <br /><br />
              15.9 This Agreement shall be governed and construed in all respects in accordance with the laws of the United Arab Emirates and the Parties agree to submit to the exclusive jurisdiction of the courts of the United Arab Emirates.
            </SectionContent>
          </Section>
        </Content>
      </Container>
    </div>
  );
};

export default Page;
