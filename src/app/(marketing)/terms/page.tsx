"use client";

import { AnimationContainer, MaxWidthWrapper } from '@/components';
import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  background-color:;
  color: #ffffff;
  padding: 10px 20px; // Reduced top padding
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
  margin-top: 10px; // Reduced top margin
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
          <TableOfContentsItem href="#acceptance-of-terms">1. Acceptance of Terms</TableOfContentsItem>
          <TableOfContentsItem href="#use-of-the-site">2. Use of the Site</TableOfContentsItem>
          <TableOfContentsItem href="#user-responsibilities">3. User Responsibilities</TableOfContentsItem>
          <TableOfContentsItem href="#intellectual-property">4. Intellectual Property</TableOfContentsItem>
          <TableOfContentsItem href="#purchases-and-payments">5. Purchases and Payments</TableOfContentsItem>
          <TableOfContentsItem href="#disclaimer-and-liability">6. Disclaimer and Liability</TableOfContentsItem>
          <TableOfContentsItem href="#general-provisions">7. General Provisions</TableOfContentsItem>
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
                      TERMS AND CONDITIONS
                  </h1>
                </AnimationContainer>
            
            </motion.div>
          </section>
          <MaxWidthWrapper className="mb-40">
          <Section id="acceptance-of-terms">
            <SectionHeader>1. Acceptance of Terms</SectionHeader>
            <SectionContent>
              By accessing or using https://ambassy.io (&quot;Site&quot;), you expressly agree to be bound by these Terms of Use and the Ambassy.io privacy policy. Ambassy.io reserves the right to change these Terms of Use at any time, effective immediately upon posting on the Site.
            </SectionContent>
          </Section>

          <Section id="use-of-the-site">
            <SectionHeader>2. Use of the Site</SectionHeader>
            <SectionContent>
              <strong>Limited License</strong>
              <br /><br />
              You are granted a limited, non-exclusive, revocable, and non-transferable license to use and access the Site pursuant to these Terms of Use. Ambassy.io may change, suspend, or discontinue any aspect of the Site at any time without notice or liability.
              <br /><br />
              <strong>Site Operation</strong>
              <br /><br />
              United Arab Emirates (U.A.E) is our country of domicile. Ambassy.io controls this Site from the U.A.E. Users accessing the Site from other locations are responsible for compliance with local laws.
              <br /><br />
              <strong>No Commercial Use</strong>
              <br /><br />
              This Site may not be used for commercial purposes without prior written consent from Ambassy.io.
            </SectionContent>
          </Section>

          <Section id="user-responsibilities">
            <SectionHeader>3. User Responsibilities</SectionHeader>
            <SectionContent>
              <strong>Your Account</strong>
              <br /><br />
              If you use the Ambassy.io Site, you are responsible for maintaining the confidentiality of your account and password and for restricting access to your account. You accept responsibility for all activities that occur under your account.
              <br /><br />
              <strong>Representations by You</strong>
              <br /><br />
              By visiting the Site, you represent, warrant, and covenant that (a) you are at least 18 years old; (b) all materials submitted by you to Ambassy.io through the Site will not plagiarize, violate, or infringe upon the rights of any third party.
            </SectionContent>
          </Section>

          <Section id="intellectual-property">
            <SectionHeader>4. Intellectual Property</SectionHeader>
            <SectionContent>
              Ambassy.io respects intellectual property rights and may terminate the privileges of any user who infringes such rights. The Site&apos;s content is the property of Ambassy.io and protected by intellectual property laws.
            </SectionContent>
          </Section>

          <Section id="purchases-and-payments">
            <SectionHeader>5. Purchases and Payments</SectionHeader>
            <SectionContent>
              Ambassy.io accepts payment by Visa or Mastercard debit and credit cards in USD for its products and services. Once the payment is made, a confirmation notice will be sent via email within 1 minute of receipt of payment.
              <br /><br />
              <strong>Cancellation and Refund Policy</strong>
              <br /><br />
              Cancellations can be made at any time, but they are non-refundable. All services provided by Ambassy.io are non-refundable.
            </SectionContent>
          </Section>

          <Section id="disclaimer-and-liability">
            <SectionHeader>6. Disclaimer and Liability</SectionHeader>
            <SectionContent>
              Ambassy.io makes no warranties of any kind regarding the Site. Ambassy.io shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from your use of the Site.
              <br /><br />
              <strong>Indemnity</strong>
              <br /><br />
              You agree to indemnify and hold Ambassy.io, its subsidiaries, affiliates, officers, agents, and employees harmless from any claims, damages, or expenses arising from your use of the Site.
            </SectionContent>
          </Section>

          <Section id="general-provisions">
            <SectionHeader>7. General Provisions</SectionHeader>
            <SectionContent>
              <strong>Applicable Law</strong>
              <br /><br />
              The laws of the United Arab Emirates shall govern the use of the Site and these Terms of Use. Any disputes shall be heard only by a court of competent jurisdiction in the U.A.E.
              <br /><br />
              <strong>OFAC Sanctioned Countries</strong>
              <br /><br />
              Ambassy.io will not trade with or provide any services to individuals and companies owned or controlled by, or acting for or on behalf of, OFAC-targeted countries and individuals, groups, and entities.
              <br /><br />
              <strong>Severability</strong>
              <br /><br />
              If any provision of these Terms of Use is held invalid, the remaining provisions shall continue in full force and effect.
            </SectionContent>
          </Section>
          </MaxWidthWrapper>
        </Content>
      </Container>
    </div>
    
  );
};

export default Page;
