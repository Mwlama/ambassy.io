"use client";

import { AnimationContainer } from '@/components';
import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  background-color: ;
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
  color: rgb(172, 0, 123);
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
  color: rgb(182, 34, 140);
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
          <TableOfContentsItem href="#how-do-i-receive-payment">How do I receive payment?</TableOfContentsItem>
          <TableOfContentsItem href="#why-do-you-need-my-details-again">You’ve paid me before, why do you need my details again?</TableOfContentsItem>
          <TableOfContentsItem href="#when-will-my-payment-be-made">When will my payment be made?</TableOfContentsItem>
          <TableOfContentsItem href="#who-do-i-contact-if-i-have-a-payment-issue">Who do I contact if I have a payment issue?</TableOfContentsItem>
          <TableOfContentsItem href="#additional-notes">Additional Notes</TableOfContentsItem>
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
                         Creator Payments FAQ
                    </h1>
                </AnimationContainer>
            </motion.div>
          </section>

          <Section id="how-do-i-receive-payment">
            <SectionHeader>How do I receive payment?</SectionHeader>
            <SectionContent>
              We collect payment information via magic links sent by your Ambassy representative. You are able to select from the below methods of payment when filling these in:
              <br /><br />
              - Email payment via our trusted partner Wise.com
              <br /><br />
              - Bank transfer can be via Brex or Wise.com
              <br /><br />
              If you need to update any details, please contact your Ambassy representative who will be able to re-share your link to edit.
            </SectionContent>
          </Section>

          <Section id="why-do-you-need-my-details-again">
            <SectionHeader>You’ve paid me before, why do you need my details again?</SectionHeader>
            <SectionContent>
              We ask you to re-share your details after every campaign with us to ensure we have the most up-to-date information for safeguarding your payment. We are headquartered in the UK, so GDPR prohibits us from storing personal information long term. Even if we are working on multiple campaigns together, we cannot use the same information for multiple campaign payments.
            </SectionContent>
          </Section>

          <Section id="when-will-my-payment-be-made">
            <SectionHeader>When will my payment be made?</SectionHeader>
            <SectionContent>
              The first step is to check your contract, which will contain the payment terms for your campaign (not every campaign will be the same), and make sure you have signed your contract and provided accurate bank details through your magic link.
              <br /><br />
              If you believe you should have been paid for a campaign and haven’t yet received your funds, please reach out to your Ambassy representative to get an update on its status, who will aim to respond within 2 working days.
            </SectionContent>
          </Section>

          <Section id="who-do-i-contact-if-i-have-a-payment-issue">
            <SectionHeader>Who do I contact if I have a payment issue?</SectionHeader>
            <SectionContent>
              For any payment-related inquiries, please contact your Ambassy representative leading the campaign. If you haven’t had a response from your Ambassy representative within 2 working days of your contact (if, for example, your rep is on leave or no longer working at Ambassy), you can submit your information [here](#), and this information will help us find the best person to respond to your issue quickly.
            </SectionContent>
          </Section>

          <Section id="additional-notes">
            <SectionHeader>Additional Notes</SectionHeader>
            <SectionContent>
              - Be sure to check your spam/junk folders for emails from our finance team or Wise regarding your payment.
              <br /><br />
              - If you experience any issues, contact your Ambassy representative, and we’ll be happy to assist you.
              <br /><br />
              - We appreciate your collaboration and patience, and we remain committed to making our payment process as efficient and transparent as possible.
            </SectionContent>
          </Section>
        </Content>
      </Container>
    </div>
  );
};

export default Page;
