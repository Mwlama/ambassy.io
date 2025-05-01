import { AnimationContainer, MaxWidthWrapper } from "@/components";
import React from 'react';

const Privacy = () => {
    return (
        <MaxWidthWrapper className="max-w-3xl mx-auto px-8 mb-40">
            <AnimationContainer delay={0.1} className="w-full">
                <h1 className="text-4xl md:text-6xl font-heading font-bold my-12 text-center w-full">
                    Privacy Policy
                </h1>
                <p className="text-sm mb-2 italic mt-20">
                    Last updated: February 10, 2025
                </p>
                <p className="mt-4">
                    At <strong>Ambassy.io</strong>, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services.
                </p>

                <h2 className="text-xl font-medium mt-8">
                    Information We Collect
                </h2>

                <h3 className="text-lg mt-4">
                    Personal Information
                </h3>
                <p className="mt-8 text-muted-foreground">
                    When you register for an account or use our services, we may collect personal information that can identify you, such as your name, email address, telephone number, and payment information. This information is gathered when you send feedback, register for services, or make purchases via the website.
                </p>

                <h3 className="text-lg font-medium mt-12">
                    Non-Personal Information
                </h3>
                <p className="mt-8 text-muted-foreground">
                    We may also collect non-personal information about your use of the service, such as IP addresses, browser types, referring URLs, and the length of your visit to the website. This data is used to improve the performance of our website.
                </p>

                <h3 className="text-lg font-medium mt-8">
                    Cookies and Tracking Technologies
                </h3>
                <p className="mt-8">
                    We use cookies and similar tracking technologies to collect and store information about your interactions with our website. Cookies are small bits of data cached in your browser, and we use them to determine whether you have visited our home page in the past. You can manage your cookie preferences through your browser settings.
                </p>

                <h2 className="text-xl font-medium mt-12">
                    How We Use Your Information
                </h2>

                <h3 className="text-lg mt-8">
                    Provide and Improve Services
                </h3>
                <div className="mt-8">
                    We use the information we collect to:
                    <ul className="list-disc ml-8 text-muted-foreground">
                        <li>Process orders and keep you informed about your order status.</li>
                        <li>Improve and personalize your experience on our website.</li>
                        <li>Notify you of products or special offers that may be of interest to you.</li>
                    </ul>
                </div>

                <h3 className="text-xl font-medium mt-12">
                    Communication
                </h3>
                <div className="mt-8">
                    We may use your information to:
                    <ul className="list-disc text-muted-foreground ml-8">
                        <li>Send you updates, promotional materials, and other information related to our services.</li>
                        <li>Respond to your inquiries and provide customer support.</li>
                    </ul>
                </div>

                <h3 className="text-lg mt-8">
                    Analytics and Research
                </h3>
                <div className="mt-8">
                    We use non-personal information for analytical purposes, such as:
                    <ul className="list-disc text-muted-foreground ml-8">
                        <li>Monitoring and analyzing usage trends and preferences.</li>
                        <li>Conducting research and improving our services.</li>
                    </ul>
                </div>

                <h2 className="text-xl font-medium mt-12">
                    How We Share Your Information
                </h2>

                <h3 className="text-lg mt-8">
                    Service Providers
                </h3>
                <p className="mt-8 text-muted-foreground">
                    We may share your information with third-party service providers who assist us in operating our services, such as delivery services for order tracking, payment processors, and hosting providers.
                </p>

                <h3 className="text-lg mt-8">
                    Legal Requirements
                </h3>
                <p className="mt-8 text-muted-foreground">
                    We may disclose your information in response to a subpoena, court order, or other legal request. We may also provide such information to law enforcement agencies as required by law.
                </p>

                <h3 className="text-lg mt-8">
                    Business Transfers
                </h3>
                <p className="mt-8 text-muted-foreground">
                    In the event of a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred to the acquiring entity.
                </p>

                <h2 className="text-xl font-medium mt-12">
                    Data Security
                </h2>
                <p className="mt-8 text-muted-foreground">
                    We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, loss, or alteration. However, no method of transmission over the internet or method of electronic storage is 100% secure.
                </p>

                <h2 className="text-xl font-medium mt-12">
                    Data Retention
                </h2>
                <p className="mt-8 text-muted-foreground">
                    We retain your personal information for as long as necessary to fulfil the purposes for which it was collected, comply with our legal obligations, resolve disputes, and enforce our agreements.
                </p>

                <h2 className="text-xl font-medium mt-12">
                    Your Rights and Choices
                </h2>

                <h3 className="text-lg mt-8">
                    Access and Update
                </h3>
                <p className="mt-8 text-muted-foreground">
                    You have the right to access and update your personal information. If you wish to modify or update any information we have received, please contact us at <strong>info@ambassy.io</strong>.
                </p>

                <h3 className="text-lg mt-8">
                    Opt-Out
                </h3>
                <p className="mt-8 text-muted-foreground">
                    You can opt out of receiving promotional emails from us by following the unsubscribe instructions in those emails. You may also contact us directly to opt out.
                </p>

                <h3 className="text-lg mt-8">
                    Data Deletion
                </h3>
                <p className="mt-8 text-muted-foreground">
                    You have the right to request the deletion of your personal information. Please contact us at <strong>info@ambassy.io</strong> to make this request.
                </p>

                <h2 className="text-xl font-medium mt-12">
                    Children&apos;s Privacy
                </h2>
                <p className="mt-8 text-muted-foreground">
                    Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from minors under 18. If we become aware that we have collected personal information from a child under 18, we will take steps to delete such information.
                </p>

                <h2 className="text-xl font-medium mt-12">
                    International Data Transfers
                </h2>
                <p className="mt-8 text-muted-foreground">
                    Your information may be transferred to and processed in countries other than your own. We will ensure that appropriate safeguards are in place to protect your personal information when it is transferred across borders.
                </p>

                <h2 className="text-xl font-medium mt-12">
                    Changes to This Privacy Policy
                </h2>
                <p className="mt-8 text-muted-foreground">
                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on our website and updating the &quot;Last updated&quot; date at the top of this page.
                </p>

                <h2 className="text-xl font-medium mt-12">
                    Contact Us
                </h2>
                <p className="mt-8 text-muted-foreground">
                    If you have any questions or concerns about this Privacy Policy, please contact us at <strong>info@ambassy.io</strong>.
                </p>

                <p className="mt-8 font-medium">
                    By using Ambassy.io, you acknowledge that you have read, understood, and agree to the terms of this Privacy Policy.
                </p>
            </AnimationContainer>
        </MaxWidthWrapper>
    );
};

export default Privacy;