import { Icon } from "../ui/Icon/Icon";

// Se usa actualmente en el navbar superior
// y en el footer.

const socialIcons = [ // Se definiran cuando estén listas.
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
