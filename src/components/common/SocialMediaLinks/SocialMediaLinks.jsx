import { Icon } from "../ui/Icon/Icon";

// Currently used in the top navbar
// and in the footer.

const socialIcons = [ // To be defined when ready.
  { name: 'facebook', href: "/" },
  { name: 'instagram', href: "/" },
  { name: 'x', href: "/" },
];

export const SocialMediaLinks = () => (
    <span style={{display: "flex", gap: ".5rem"}}>
      {socialIcons.map(({ href, name }, i) => (
        <a href={href} key={i + href}>
          <Icon name={name} alt={""} className="social-media-icon" />
        </a>
      ))}
    </span>
  )