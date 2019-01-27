
const Utils = {
  node: {
    minWidth: 140,
    minHeight: 40,
    margin: 10,
    space: 4,
    childSpace: {
      horizonal: 80,
      vertical: 40
    }
  },
  zone: {
    height: 12,
    padding: 10,
    fill: '#191970',
    highlight: '#FFC125'
  },
  label: {
    iconSize: 24,
    space: 8,
    fontSize: 16,
    subFontSize: 12
  },
  link: {
    distance: 40
  },
  svg: {
    baseSize: 1024,
    default: 'M290.306439 218.184864c0-2.815969-1.087988-90.495005 20.671773-117.438708 22.015758-27.519697 85.055064-63.039307 85.055064-63.039307s71.935209-44.735508 85.183063-36.671597C494.656191 8.971165 492.352216 95.626212 492.352216 95.626212s-0.639993 85.631058-14.52784 110.334786C464.000528 230.600727 392.00132 273.672253 392.00132 273.672253s-63.039307 41.151547-84.671069 40.319556C286.082485 313.223818 290.242439 221.192831 290.306439 218.184864zM334.145956 656.388043c0.511994 15.551829 77.055152 56.127383 77.055152 56.127383s75.263172 41.343545 103.358863 41.343545c28.351688 0 101.054888-41.599542 101.054888-41.599542s66.815265-34.815617 76.735156-54.015406c9.727893-18.943792-72.639201-60.415335-75.263172-61.887319C614.654871 594.948719 538.687706 551.173201 504.640081 556.805139 469.760465 562.693074 407.937145 600.132662 407.937145 600.132662S333.633962 640.900214 334.145956 656.388043zM302.722302 590.980763c21.631762 0.831991 84.607069-40.319556 84.607069-40.319556s71.935209-43.071526 85.823056-67.711255C487.040275 458.374222 487.744267 372.679164 487.744267 372.679164S489.856244 286.088117 476.608389 278.024205C463.296536 269.960294 391.361327 314.631803 391.361327 314.631803S328.450019 350.34341 306.306263 377.671109C284.610501 404.678812 285.63449 492.293848 285.63449 495.237816 285.506491 498.117784 281.474536 590.212771 302.722302 590.980763zM787.964964 353.415376c13.951847 24.639729 85.951055 67.711255 85.951055 67.711255s62.975307 41.215547 84.607069 40.319556c21.183767-0.831991 17.151811-92.798979 17.087812-95.742947 0-2.879968 1.215987-90.431005-20.607773-117.566707-22.143756-27.391699-85.119064-63.039307-85.119064-63.039307s-71.935209-44.735508-85.183063-36.607597c-13.375853 7.999912-11.199877 94.590959-11.199877 94.590959S774.269115 328.903646 787.964964 353.415376zM717.821736 377.671109c-22.207756-27.391699-85.119064-63.103306-85.119064-63.103306S560.767464 269.960294 547.45561 278.024205C534.207756 286.088117 536.255733 372.679164 536.255733 372.679164s0.831991 85.631058 14.655839 110.270787c13.887847 24.639729 85.759057 67.711255 85.759057 67.711255s63.103306 41.151547 84.671069 40.319556c21.247766-0.831991 17.151811-92.926978 17.023813-95.806946C738.36551 492.293848 739.517497 404.678812 717.821736 377.671109zM546.303623 205.960998c13.759849 24.639729 85.759057 67.711255 85.759057 67.711255s63.039307 41.151547 84.671069 40.319556c21.183767-0.767992 17.151811-92.798979 17.087812-95.806946 0-2.815969 1.023989-90.495005-20.671773-117.438708-22.079757-27.519697-85.119064-63.039307-85.119064-63.039307S556.031516-7.092658 542.783661 0.971253C529.407809 8.971165 531.647784 95.626212 531.647784 95.626212S532.351776 181.25727 546.303623 205.960998zM231.299088 630.532328c13.823848-24.703728 14.591839-110.334786 14.591839-110.334786s2.175976-86.591047-11.071878-94.718958C221.379197 417.478671 149.443988 462.15018 149.443988 462.15018S86.596679 497.733789 64.452923 525.189487c-21.759761 27.071702-20.735772 114.622739-20.735772 117.502707C43.653152 645.636162 39.685195 737.667149 60.804963 738.56314c21.695761 0.703992 84.671069-40.383556 84.671069-40.383556S217.47524 654.980059 231.299088 630.532328zM860.924162 727.939256c-2.431973-1.343985-78.335138-45.247502-112.510762-39.423566-34.751618 5.695937-96.638937 43.263524-96.638937 43.263524s-74.303183 40.703552-73.855188 56.255381c0.639993 15.48783 77.119152 56.127383 77.119152 56.127383s75.263172 41.343545 103.294864 41.343545c28.351688 0 101.118888-41.727541 101.118888-41.727541s66.815265-34.815617 76.671157-54.015406C945.979226 770.882784 863.676132 729.283242 860.924162 727.939256zM65.476912 461.446188c21.631762 0.831991 84.671069-40.319556 84.671069-40.319556S222.083189 378.119104 235.971036 353.415376c13.823848-24.57573 14.655839-110.398786 14.655839-110.398786S252.738852 156.553542 239.554997 148.48963C226.115145 140.425719 154.179936 185.161227 154.179936 185.161227S91.204629 220.744836 69.124872 248.136534C47.365111 275.272236 48.453099 362.823273 48.453099 365.703241 48.3251 368.647209 44.293145 460.678196 65.476912 461.446188zM980.282849 642.692194c0.063999-2.879968 1.087988-90.431005-20.671773-117.502707-22.079757-27.455698-85.119064-63.039307-85.119064-63.039307s-71.80721-44.671509-85.183063-36.671597c-13.247854 8.127911-11.199877 94.718958-11.199877 94.718958s0.831991 85.631058 14.655839 110.334786c13.823848 24.51173 85.759057 67.711255 85.759057 67.711255s63.039307 41.087548 84.735068 40.383556C984.506802 737.667149 980.346848 645.636162 980.282849 642.692194zM445.312734 796.6745c9.663894-18.879792-72.639201-60.351336-75.327171-61.82332-2.431973-1.343985-78.335138-45.183503-112.510762-39.487566-34.687618 5.823936-96.638937 43.263524-96.638937 43.263524s-74.239183 40.831551-73.727189 56.38338 77.055152 56.063383 77.055152 56.063383 75.135174 41.343545 103.422862 41.343545 101.054888-41.599542 101.054888-41.599542S435.328843 815.938288 445.312734 796.6745zM613.886879 866.433733c-2.431973-1.343985-78.271139-45.183503-112.446763-39.423566-34.815617 5.823936-96.766936 43.199525-96.766936 43.199525s-74.175184 40.89555-73.66319 56.447379c0.511994 15.551829 77.055152 56.063383 77.055152 56.063383S483.136318 1024 511.360007 1024s101.054888-41.599542 101.054888-41.599542 66.815265-34.815617 76.671157-54.015406C698.813945 909.44126 616.51085 867.841717 613.886879 866.433733z',
    root: 'M599.296 791.424c0-26.432 21.504-48 48-48s48 21.568 48 48-21.504 48-48 48S599.296 817.856 599.296 791.424zM391.296 743.424c-26.496 0-48 21.568-48 48s21.504 48 48 48 48-21.568 48-48S417.792 743.424 391.296 743.424zM245.12 580.8C236.416 568.832 222.912 560.448 206.912 560.448c-26.496 0-48 21.568-48 48s21.504 48 48 48 48-21.568 48-48c0-5.376-1.408-10.304-3.072-15.104L245.12 580.8zM564.288 214.272c0-26.432-21.504-48-48-48s-48 21.568-48 48 21.504 48 48 48S564.288 240.704 564.288 214.272zM816.512 560.448c-16 0-29.44 8.384-38.208 20.352l-6.72 12.48c-1.6 4.8-3.072 9.728-3.072 15.104 0 26.432 21.504 48 48 48s48-21.568 48-48S843.008 560.448 816.512 560.448zM960 512c0 247.36-200.576 448-448 448-247.36 0-448-200.64-448-448 0-247.424 200.64-448 448-448C759.424 64 960 264.576 960 512zM912.512 608.448c0-52.992-43.008-96-96-96-23.616 0-44.992 8.896-61.696 23.04-54.976-28.928-128.128-66.176-151.68-76.288C576.576 447.808 560.704 426.24 550.912 404.608 546.88 381.888 545.344 356.096 545.728 338.496L545.728 305.216c38.528-12.48 66.56-48.256 66.56-90.944 0-52.992-43.008-96-96-96s-96 43.008-96 96c0 42.944 28.352 78.848 67.328 91.136l0 33.152c-0.192 1.92 0.064 4.8 0 7.168C486.208 364.672 476.928 434.944 420.288 459.2c-23.552 10.112-96.64 47.36-151.616 76.288-16.768-14.208-38.144-23.04-61.76-23.04-52.992 0-96 43.008-96 96s43.008 96 96 96 96-43.008 96-96c0-11.84-2.432-22.976-6.336-33.408C348.608 547.776 414.72 514.048 437.568 504.064 426.88 522.688 416.448 541.312 410.24 553.216c-27.648 53.376-25.216 121.472-25.088 123.392l0 19.52c-50.112 3.264-89.856 44.48-89.856 95.36 0 52.992 43.008 96 96 96s96-43.008 96-96c0-37.952-22.208-70.4-54.144-86.016l0-29.888c-0.704-16 1.536-65.344 19.712-100.224C467.072 547.968 506.304 480.768 513.92 469.184c1.664-2.56 2.944-5.76 4.352-8.64 1.536 3.008 2.88 6.272 4.608 8.896C530.56 480.768 570.304 547.84 584.768 575.296c21.888 41.856 19.904 99.712 19.84 101.248l0 29.376c-31.424 15.744-53.248 47.936-53.248 85.504 0 52.992 43.008 96 96 96s96-43.008 96-96c0-51.2-40.256-92.672-90.752-95.488l0-18.368c0.128-2.88 2.688-70.976-25.344-124.544C622.208 543.36 613.824 528.576 604.8 512.96c30.464 14.656 80.512 40.32 121.984 62.08-3.904 10.432-6.336 21.632-6.336 33.408 0 52.992 43.008 96 96 96S912.512 661.44 912.512 608.448z',
    service: 'M599.296 791.424c0-26.432 21.504-48 48-48s48 21.568 48 48-21.504 48-48 48S599.296 817.856 599.296 791.424zM391.296 743.424c-26.496 0-48 21.568-48 48s21.504 48 48 48 48-21.568 48-48S417.792 743.424 391.296 743.424zM245.12 580.8C236.416 568.832 222.912 560.448 206.912 560.448c-26.496 0-48 21.568-48 48s21.504 48 48 48 48-21.568 48-48c0-5.376-1.408-10.304-3.072-15.104L245.12 580.8zM564.288 214.272c0-26.432-21.504-48-48-48s-48 21.568-48 48 21.504 48 48 48S564.288 240.704 564.288 214.272zM816.512 560.448c-16 0-29.44 8.384-38.208 20.352l-6.72 12.48c-1.6 4.8-3.072 9.728-3.072 15.104 0 26.432 21.504 48 48 48s48-21.568 48-48S843.008 560.448 816.512 560.448zM960 512c0 247.36-200.576 448-448 448-247.36 0-448-200.64-448-448 0-247.424 200.64-448 448-448C759.424 64 960 264.576 960 512zM912.512 608.448c0-52.992-43.008-96-96-96-23.616 0-44.992 8.896-61.696 23.04-54.976-28.928-128.128-66.176-151.68-76.288C576.576 447.808 560.704 426.24 550.912 404.608 546.88 381.888 545.344 356.096 545.728 338.496L545.728 305.216c38.528-12.48 66.56-48.256 66.56-90.944 0-52.992-43.008-96-96-96s-96 43.008-96 96c0 42.944 28.352 78.848 67.328 91.136l0 33.152c-0.192 1.92 0.064 4.8 0 7.168C486.208 364.672 476.928 434.944 420.288 459.2c-23.552 10.112-96.64 47.36-151.616 76.288-16.768-14.208-38.144-23.04-61.76-23.04-52.992 0-96 43.008-96 96s43.008 96 96 96 96-43.008 96-96c0-11.84-2.432-22.976-6.336-33.408C348.608 547.776 414.72 514.048 437.568 504.064 426.88 522.688 416.448 541.312 410.24 553.216c-27.648 53.376-25.216 121.472-25.088 123.392l0 19.52c-50.112 3.264-89.856 44.48-89.856 95.36 0 52.992 43.008 96 96 96s96-43.008 96-96c0-37.952-22.208-70.4-54.144-86.016l0-29.888c-0.704-16 1.536-65.344 19.712-100.224C467.072 547.968 506.304 480.768 513.92 469.184c1.664-2.56 2.944-5.76 4.352-8.64 1.536 3.008 2.88 6.272 4.608 8.896C530.56 480.768 570.304 547.84 584.768 575.296c21.888 41.856 19.904 99.712 19.84 101.248l0 29.376c-31.424 15.744-53.248 47.936-53.248 85.504 0 52.992 43.008 96 96 96s96-43.008 96-96c0-51.2-40.256-92.672-90.752-95.488l0-18.368c0.128-2.88 2.688-70.976-25.344-124.544C622.208 543.36 613.824 528.576 604.8 512.96c30.464 14.656 80.512 40.32 121.984 62.08-3.904 10.432-6.336 21.632-6.336 33.408 0 52.992 43.008 96 96 96S912.512 661.44 912.512 608.448z',
    sequence: 'M64 384l0 384 0 192 192 0 0-192L256 384 256 64 64 64 64 384zM192 448l0 256L128 704 128 448 192 448zM320 576l0 320 0 64 192 0 0-64L512 576 512 256 320 256 320 576zM448 640l0 192L384 832l0-192L448 640zM576 320l0 384 0 256 192 0 0-256L768 320 768 128 576 128 576 320zM704 384l0 256-64 0L640 384 704 384zM832 384l0 192 0 320 0 64 192 0 0-64L1024 576 1024 384 832 384zM960 640l0 192-64 0 0-192L960 640z' 
  }
}

export default Utils
