import "./style.css";

export default function Basket() {
  return (
    <div className="basket">
      <svg
        width="45"
        height="45"
        viewBox="0 0 35 33"
        fill="black"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M29.5952 20.4286V25.1429H34.2682V28.2857H29.5952V33H26.4799V28.2857H21.807V25.1429H26.4799V20.4286H29.5952ZM19.2369 29.8571H7.00939C5.57636 29.8571 4.37698 28.8829 4.01872 27.5629L0.0623057 12.9957C-5.58794e-08 12.8543 0 12.7129 0 12.5714C0 11.7071 0.700939 11 1.55764 11H9.01875L15.8412 0.707143C16.1372 0.251429 16.6356 0 17.1341 0C17.6325 0 18.131 0.251429 18.4269 0.691429L25.2494 11H32.7105C33.5672 11 34.2682 11.7071 34.2682 12.5714L34.2214 12.9957L32.7105 18.5586C31.8226 18.0714 30.8258 17.6629 29.7821 17.4586L30.6856 14.1429H14.0188H3.59816L7.00939 26.7143H18.6917C18.6917 27.8143 18.8942 28.8671 19.2369 29.8571ZM12.7727 11H21.4955L17.1341 4.4L12.7727 11Z"
          fill="black"
        />
      </svg>
      <div className="basket-items-number">1</div>
    </div>
  );
}
