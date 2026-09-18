"use client";
import { Box, Typography } from "@mui/material";

export default function PrivacyPolicy() {
  return (
    <>
      <Box
        component="section"
        sx={{
          backgroundColor: "#000",
          color: "#fff",
          minHeight: { xs: "40vh", md: "60vh" },
          height: "auto",
          padding: {
            xs: "100px 0 40px",
            sm: "120px 0 50px",
            md: "140px 0 60px",
          },
          position: "relative",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          "&::before": {
            content: '""',
            position: "absolute",
            inset: 0,
            background: `linear-gradient(45deg,
              rgba(255, 255, 255, 0.03) 25%,
              transparent 25%,
              transparent 50%,
              rgba(255, 255, 255, 0.03) 50%,
              rgba(255, 255, 255, 0.03) 75%,
              transparent 75%)`,
            backgroundSize: "20px 20px",
            opacity: 0.5,
          },
        }}
      >
        <Box
          sx={{
            width: "90%",
            maxWidth: "1200px",
            margin: "0 auto",
            position: "relative",
            zIndex: 1,
          }}
        >
          <Typography
            component="h1"
            sx={{
              fontSize: { xs: "32px", sm: "42px", md: "3.5rem", lg: "4.5rem" },
              fontWeight: 900,
              margin: "0 0 10px",
              color: "#fff",
            }}
          >
            Privacy Policy
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "15px", md: "18px" },
              lineHeight: "27px",
              fontWeight: 300,
              color: "#ccc",
              maxWidth: { xs: "100%", sm: "80%", lg: "75%" },
            }}
          >
            The eComguru protects what we are trusted with.
          </Typography>
        </Box>
      </Box>

      <Box
        component="section"
        sx={{
          maxWidth: "1200px",
          width: "90%",
          margin: { xs: "40px auto 80px", md: "60px auto 100px" },
          px: { xs: 1, sm: 2 },
          "& h2": {
            fontSize: { xs: "16px", md: "18px" },
            fontWeight: 700,
            color: "#212529",
            lineHeight: "26px",
            mb: "12px",
            mt: "24px",
            textTransform: "uppercase",
          },
          "& h3": {
            fontSize: "15px",
            fontWeight: 800,
            color: "#212529",
            lineHeight: "26px",
            mb: "10px",
            mt: "20px",
          },
          "& p": {
            fontSize: { xs: "15px", md: "16px" },
            lineHeight: { xs: "24px", md: "28px" },
            fontWeight: 400,
            fontFamily: "'Segoe UI', sans-serif",
            margin: "0px 0px 18px",
            color: "#333",
          },
          "& ol, & ul": {
            paddingLeft: { xs: "20px", md: "30px" },
            margin: "16px 0",
          },
          "& ol li, & ul li": {
            fontSize: { xs: "15px", md: "16px" },
            lineHeight: { xs: "24px", md: "28px" },
            fontWeight: 400,
            fontFamily: "'Segoe UI', sans-serif",
            mb: "10px",
            color: "#333",
          },
        }}
      >
        <p>
          We care about data privacy and security. By using the Site, you agree
          to be bound by our Privacy Policy, which is incorporated into these
          Terms of Use. Please be advised the Site is hosted in India.
        </p>
        <p>
          You agree that by accessing the Site, you have read, understood, and
          agree to be bound by all of these Terms of Use. If you do not agree
          with all of these Terms of Use, then you are expressly prohibited from
          using the Site and you must discontinue use immediately. Supplemental
          Terms of Use or documents that may be posted on the Site from time to
          time are hereby expressly incorporated herein by reference. We reserve
          the right, in our sole discretion, to make changes or modifications to
          these Terms of Use at any time and for any reason. We will alert you
          about any changes by updating the &quot;Last updated&quot; date of
          these Terms of Use, and you waive any right to receive specific notice
          of each such change. It is your responsibility to periodically review
          these Terms of Use to stay informed of updates. You will be subject
          to, and will be deemed to have been made aware of and to have
          accepted, the changes in any revised Terms of Use by your continued
          use of the Site after the date such revised Terms of Use are
          posted. The information provided on the Site is not intended for
          distribution to or use by any person or entity in any jurisdiction or
          country where such distribution or use would be contrary to law or
          regulation or which would subject us to any registration requirement
          within such jurisdiction or country. Accordingly, those persons who
          choose to access the Site from other locations do so on their own
          initiative and are solely responsible for compliance with local laws,
          if and to the extent local laws are applicable.
        </p>
        <p>
          We respect the intellectual property rights of others. If you believe
          that any material available on or through the Site infringes upon any
          copyright you own or control, please immediately notify our Designated
          Copyright Agent using the contact information provided below (a
          &quot;Notification&quot;).
        </p>
        <p>
          A copy of your Notification will be sent to the person who posted or
          stored the material addressed in the Notification. Please be advised
          that pursuant to federal law you may be held liable for damages if you
          make material misrepresentations in a Notification. Thus, if you are
          not sure that material located on or linked to by the Site infringes
          your copyright, you should consider first contacting an attorney.
        </p>
        <ol>
          <li>
            A physical or electronic signature of a person authorized to act on
            behalf of the owner of an exclusive right that is allegedly
            infringed;
          </li>
          <li>
            identification of the copyrighted work claimed to have been
            infringed, or, if multiple copyrighted works on the Site are covered
            by the Notification, a representative list of such works on the
            Site;
          </li>
          <li>
            identification of the material that is claimed to be infringing or
            to be the subject of infringing activity and that is to be removed
            or access to which is to be disabled, and information reasonably
            sufficient to permit us to locate the material;
          </li>
          <li>
            information reasonably sufficient to permit us to contact the
            complaining party, such as an address, telephone number, and, if
            available, an email address at which the complaining party may be
            contacted;
          </li>
          <li>
            a statement that the complaining party has a good faith belief that
            use of the material in the manner complained of is not authorized by
            the copyright owner, its agent, or the law;
          </li>
          <li>
            a statement that the information in the notification is accurate,
            and under penalty of perjury, that the complaining party is
            authorized to act on behalf of the owner of an exclusive right that
            is allegedly infringed upon.
          </li>
          <li>
            identification of the material that has been removed or disabled and
            the location at which the material appeared before it was removed or
            disabled;
          </li>
          <li>
            a statement that you consent to the jurisdiction of the court in
            which your address is located, or if your address is outside India, for any judicial district in which we are located;
          </li>
          <li>
            a statement that you will accept service of process from the party
            that filed the Notification or the party&apos;s agent;
          </li>
          <li>your name, address, and telephone number;</li>
          <li>
            a statement under penalty of perjury that you have a good faith
            belief that the material in question was removed or disabled as a
            result of a mistake or misidentification of the material to be
            removed or disabled;
          </li>
          <li>your physical or electronic signature.</li>
        </ol>
        <p>
          If you send us a valid, written Counter Notification meeting the
          requirements described above, we will restore your removed or disabled
          material, unless we first receive notice from the party filing the
          Notification informing us that such party has filed a court action to
          restrain you from engaging in infringing activity related to the
          material in question.
        </p>
        <p>
          Please note that if you materially misrepresent that the disabled or
          removed content was removed by mistake or misidentification, you may
          be liable for damages, including costs and attorney&apos;s fees.
          Filing a false Counter Notification constitutes perjury.
        </p>
      </Box>
    </>
  );
}

