
const Utils = {
  node: {
    minWidth: 140,
    minHeight: 40,
    margin: 10,
    space: 6,
    childSpace: {
      horizonal: 100,
      vertical: 20
    },
    dragDistance: 40,
    highlight: '#FFC125'
  },
  zone: {
    height: 12,
    padding: 10,
    fill: '#646273',
    highlight: '#FFC125'
  },
  label: {
    iconSize: 24,
    space: 8,
    fontSize: 16,
    subFontSize: 12,
    orderFontSize: 10,
    dropHeight: 2
  },
  link: {
    distance: 40
  },
  marker: {
    fill: '#CDC0B0'
  },
  svg: {
    baseSize: 1024,
    default: 'M290.306439 218.184864c0-2.815969-1.087988-90.495005 20.671773-117.438708 22.015758-27.519697 85.055064-63.039307 85.055064-63.039307s71.935209-44.735508 85.183063-36.671597C494.656191 8.971165 492.352216 95.626212 492.352216 95.626212s-0.639993 85.631058-14.52784 110.334786C464.000528 230.600727 392.00132 273.672253 392.00132 273.672253s-63.039307 41.151547-84.671069 40.319556C286.082485 313.223818 290.242439 221.192831 290.306439 218.184864zM334.145956 656.388043c0.511994 15.551829 77.055152 56.127383 77.055152 56.127383s75.263172 41.343545 103.358863 41.343545c28.351688 0 101.054888-41.599542 101.054888-41.599542s66.815265-34.815617 76.735156-54.015406c9.727893-18.943792-72.639201-60.415335-75.263172-61.887319C614.654871 594.948719 538.687706 551.173201 504.640081 556.805139 469.760465 562.693074 407.937145 600.132662 407.937145 600.132662S333.633962 640.900214 334.145956 656.388043zM302.722302 590.980763c21.631762 0.831991 84.607069-40.319556 84.607069-40.319556s71.935209-43.071526 85.823056-67.711255C487.040275 458.374222 487.744267 372.679164 487.744267 372.679164S489.856244 286.088117 476.608389 278.024205C463.296536 269.960294 391.361327 314.631803 391.361327 314.631803S328.450019 350.34341 306.306263 377.671109C284.610501 404.678812 285.63449 492.293848 285.63449 495.237816 285.506491 498.117784 281.474536 590.212771 302.722302 590.980763zM787.964964 353.415376c13.951847 24.639729 85.951055 67.711255 85.951055 67.711255s62.975307 41.215547 84.607069 40.319556c21.183767-0.831991 17.151811-92.798979 17.087812-95.742947 0-2.879968 1.215987-90.431005-20.607773-117.566707-22.143756-27.391699-85.119064-63.039307-85.119064-63.039307s-71.935209-44.735508-85.183063-36.607597c-13.375853 7.999912-11.199877 94.590959-11.199877 94.590959S774.269115 328.903646 787.964964 353.415376zM717.821736 377.671109c-22.207756-27.391699-85.119064-63.103306-85.119064-63.103306S560.767464 269.960294 547.45561 278.024205C534.207756 286.088117 536.255733 372.679164 536.255733 372.679164s0.831991 85.631058 14.655839 110.270787c13.887847 24.639729 85.759057 67.711255 85.759057 67.711255s63.103306 41.151547 84.671069 40.319556c21.247766-0.831991 17.151811-92.926978 17.023813-95.806946C738.36551 492.293848 739.517497 404.678812 717.821736 377.671109zM546.303623 205.960998c13.759849 24.639729 85.759057 67.711255 85.759057 67.711255s63.039307 41.151547 84.671069 40.319556c21.183767-0.767992 17.151811-92.798979 17.087812-95.806946 0-2.815969 1.023989-90.495005-20.671773-117.438708-22.079757-27.519697-85.119064-63.039307-85.119064-63.039307S556.031516-7.092658 542.783661 0.971253C529.407809 8.971165 531.647784 95.626212 531.647784 95.626212S532.351776 181.25727 546.303623 205.960998zM231.299088 630.532328c13.823848-24.703728 14.591839-110.334786 14.591839-110.334786s2.175976-86.591047-11.071878-94.718958C221.379197 417.478671 149.443988 462.15018 149.443988 462.15018S86.596679 497.733789 64.452923 525.189487c-21.759761 27.071702-20.735772 114.622739-20.735772 117.502707C43.653152 645.636162 39.685195 737.667149 60.804963 738.56314c21.695761 0.703992 84.671069-40.383556 84.671069-40.383556S217.47524 654.980059 231.299088 630.532328zM860.924162 727.939256c-2.431973-1.343985-78.335138-45.247502-112.510762-39.423566-34.751618 5.695937-96.638937 43.263524-96.638937 43.263524s-74.303183 40.703552-73.855188 56.255381c0.639993 15.48783 77.119152 56.127383 77.119152 56.127383s75.263172 41.343545 103.294864 41.343545c28.351688 0 101.118888-41.727541 101.118888-41.727541s66.815265-34.815617 76.671157-54.015406C945.979226 770.882784 863.676132 729.283242 860.924162 727.939256zM65.476912 461.446188c21.631762 0.831991 84.671069-40.319556 84.671069-40.319556S222.083189 378.119104 235.971036 353.415376c13.823848-24.57573 14.655839-110.398786 14.655839-110.398786S252.738852 156.553542 239.554997 148.48963C226.115145 140.425719 154.179936 185.161227 154.179936 185.161227S91.204629 220.744836 69.124872 248.136534C47.365111 275.272236 48.453099 362.823273 48.453099 365.703241 48.3251 368.647209 44.293145 460.678196 65.476912 461.446188zM980.282849 642.692194c0.063999-2.879968 1.087988-90.431005-20.671773-117.502707-22.079757-27.455698-85.119064-63.039307-85.119064-63.039307s-71.80721-44.671509-85.183063-36.671597c-13.247854 8.127911-11.199877 94.718958-11.199877 94.718958s0.831991 85.631058 14.655839 110.334786c13.823848 24.51173 85.759057 67.711255 85.759057 67.711255s63.039307 41.087548 84.735068 40.383556C984.506802 737.667149 980.346848 645.636162 980.282849 642.692194zM445.312734 796.6745c9.663894-18.879792-72.639201-60.351336-75.327171-61.82332-2.431973-1.343985-78.335138-45.183503-112.510762-39.487566-34.687618 5.823936-96.638937 43.263524-96.638937 43.263524s-74.239183 40.831551-73.727189 56.38338 77.055152 56.063383 77.055152 56.063383 75.135174 41.343545 103.422862 41.343545 101.054888-41.599542 101.054888-41.599542S435.328843 815.938288 445.312734 796.6745zM613.886879 866.433733c-2.431973-1.343985-78.271139-45.183503-112.446763-39.423566-34.815617 5.823936-96.766936 43.199525-96.766936 43.199525s-74.175184 40.89555-73.66319 56.447379c0.511994 15.551829 77.055152 56.063383 77.055152 56.063383S483.136318 1024 511.360007 1024s101.054888-41.599542 101.054888-41.599542 66.815265-34.815617 76.671157-54.015406C698.813945 909.44126 616.51085 867.841717 613.886879 866.433733z',
    root: 'M599.296 791.424c0-26.432 21.504-48 48-48s48 21.568 48 48-21.504 48-48 48S599.296 817.856 599.296 791.424zM391.296 743.424c-26.496 0-48 21.568-48 48s21.504 48 48 48 48-21.568 48-48S417.792 743.424 391.296 743.424zM245.12 580.8C236.416 568.832 222.912 560.448 206.912 560.448c-26.496 0-48 21.568-48 48s21.504 48 48 48 48-21.568 48-48c0-5.376-1.408-10.304-3.072-15.104L245.12 580.8zM564.288 214.272c0-26.432-21.504-48-48-48s-48 21.568-48 48 21.504 48 48 48S564.288 240.704 564.288 214.272zM816.512 560.448c-16 0-29.44 8.384-38.208 20.352l-6.72 12.48c-1.6 4.8-3.072 9.728-3.072 15.104 0 26.432 21.504 48 48 48s48-21.568 48-48S843.008 560.448 816.512 560.448zM960 512c0 247.36-200.576 448-448 448-247.36 0-448-200.64-448-448 0-247.424 200.64-448 448-448C759.424 64 960 264.576 960 512zM912.512 608.448c0-52.992-43.008-96-96-96-23.616 0-44.992 8.896-61.696 23.04-54.976-28.928-128.128-66.176-151.68-76.288C576.576 447.808 560.704 426.24 550.912 404.608 546.88 381.888 545.344 356.096 545.728 338.496L545.728 305.216c38.528-12.48 66.56-48.256 66.56-90.944 0-52.992-43.008-96-96-96s-96 43.008-96 96c0 42.944 28.352 78.848 67.328 91.136l0 33.152c-0.192 1.92 0.064 4.8 0 7.168C486.208 364.672 476.928 434.944 420.288 459.2c-23.552 10.112-96.64 47.36-151.616 76.288-16.768-14.208-38.144-23.04-61.76-23.04-52.992 0-96 43.008-96 96s43.008 96 96 96 96-43.008 96-96c0-11.84-2.432-22.976-6.336-33.408C348.608 547.776 414.72 514.048 437.568 504.064 426.88 522.688 416.448 541.312 410.24 553.216c-27.648 53.376-25.216 121.472-25.088 123.392l0 19.52c-50.112 3.264-89.856 44.48-89.856 95.36 0 52.992 43.008 96 96 96s96-43.008 96-96c0-37.952-22.208-70.4-54.144-86.016l0-29.888c-0.704-16 1.536-65.344 19.712-100.224C467.072 547.968 506.304 480.768 513.92 469.184c1.664-2.56 2.944-5.76 4.352-8.64 1.536 3.008 2.88 6.272 4.608 8.896C530.56 480.768 570.304 547.84 584.768 575.296c21.888 41.856 19.904 99.712 19.84 101.248l0 29.376c-31.424 15.744-53.248 47.936-53.248 85.504 0 52.992 43.008 96 96 96s96-43.008 96-96c0-51.2-40.256-92.672-90.752-95.488l0-18.368c0.128-2.88 2.688-70.976-25.344-124.544C622.208 543.36 613.824 528.576 604.8 512.96c30.464 14.656 80.512 40.32 121.984 62.08-3.904 10.432-6.336 21.632-6.336 33.408 0 52.992 43.008 96 96 96S912.512 661.44 912.512 608.448z',
    sequence: 'M64 384l0 384 0 192 192 0 0-192L256 384 256 64 64 64 64 384zM192 448l0 256L128 704 128 448 192 448zM320 576l0 320 0 64 192 0 0-64L512 576 512 256 320 256 320 576zM448 640l0 192L384 832l0-192L448 640zM576 320l0 384 0 256 192 0 0-256L768 320 768 128 576 128 576 320zM704 384l0 256-64 0L640 384 704 384zM832 384l0 192 0 320 0 64 192 0 0-64L1024 576 1024 384 832 384zM960 640l0 192-64 0 0-192L960 640z',
    selector: 'M950.658471 77.376c-61.184-63.104-261.248-76.352-418.432-76.352L525.314471 1.024C520.194471 0.896 498.370471 0.128 466.946471 0.128c-118.592 0-276.224 9.088-353.344 51.776C0.642471 114.432-2.941529 391.168 0.898471 509.248c-3.84 119.936-0.192 400.384 112.704 463.04 76.992 42.56 234.624 51.648 353.152 51.648 31.488 0 53.44-0.704 58.624-0.896l6.976 0c157.12 0 357.184-13.248 418.368-76.352 69.056-71.104 74.24-327.232 73.28-434.624C1024.962471 404.608 1019.778471 148.608 950.658471 77.376zM912.578471 910.336c-6.848 7.104-17.152 13.312-29.824 18.88L882.754471 576.832c0-19.584-15.744-35.392-35.264-35.392L776.962471 541.44c-19.52 0-35.392 15.808-35.392 35.392l0 382.912c-19.648 2.24-39.424 3.968-58.752 5.44L682.818471 788.48c0-19.584-15.808-35.264-35.328-35.264L576.962471 753.216c-19.584 0-35.392 15.68-35.392 35.264l0 182.144c-3.456 0-6.784 0-9.216 0-5.056 0-7.872 0-7.872 0s-16.384 0.512-41.728 0.64l0-270.976c0-19.52-15.808-35.264-35.328-35.264L376.834471 665.024c-19.52 0-35.328 15.744-35.328 35.264l0 267.2c-19.584-1.344-39.36-3.2-58.816-5.44L282.690471 523.776c0-19.392-15.744-35.2-35.2-35.2L176.834471 488.576c-19.52 0-35.328 15.808-35.328 35.2l0 403.52c-0.576-0.32-1.472-0.576-2.048-0.896-97.472-54.016-85.888-405.824-85.504-417.216C53.698471 503.296 50.498471 401.28 62.274471 299.392c23.296-8.192 124.032-37.248 263.04 19.584C412.802471 354.624 519.746471 429.504 557.890471 532.992l30.656 83.2 20.032-86.4c28.544-124.096 88.832-174.272 132.992-194.688l0 63.168c0 6.72 2.368 12.416 7.232 17.216 4.8 4.928 10.624 7.36 17.28 7.296 6.336-0.064 12.224-2.432 17.088-7.296l92.672-92.544c4.8-4.928 7.168-10.688 7.232-17.216-0.064-6.656-2.432-12.352-7.232-17.216l-92.736-92.672c-4.736-4.864-10.688-7.232-17.024-7.232-6.656 0-12.416 2.368-17.28 7.168-4.864 4.928-7.232 10.56-7.296 17.216l0.064 65.088c-49.344 16.448-121.472 59.968-165.056 174.656C520.450471 365.504 425.410471 302.528 345.346471 269.952 218.434471 218.176 119.874471 229.696 70.850471 241.664c12.416-66.432 33.344-124.48 68.608-144 71.232-39.552 238.72-44.992 327.488-44.992 34.816 0 57.536 0.832 57.536 0.832s2.816 0 7.808 0c50.176 0 324.48 2.688 380.288 60.288C974.146471 177.344 971.074471 512 971.074471 512S974.146471 846.72 912.578471 910.336z',
    decorator: 'M810.688 463.616c-81.472 0-149.376 69.504-149.376 149.376 0 58.24 36.352 110.72 87.744 134.976-24.512 66.304-87.552 113.856-162.368 113.856-85.12 0-154.88-61.44-170.048-142.272 19.712-27.456 36.416-62.4 42.816-87.872 144.896-95.552 201.856-385.536 201.856-417.024 0-53.824-99.584-149.312-99.584-149.312L526.976 65.344C491.136 58.24 454.4 78.272 441.856 114.176 428.16 153.408 448.576 196.032 487.36 209.664 495.488 212.48 503.808 213.568 512 213.504l0 1.28 49.728 0C560.896 260.48 505.92 563.2 362.688 563.2c-143.04 0-199.104-348.416-199.104-348.416l32.32 0c29.632 6.528 61.248-5.76 78.528-33.344C296.32 145.92 286.016 99.392 251.328 77.12c-11.904-7.616-24.96-11.136-38.016-11.392L213.312 65.408 163.584 65.408c0 0-99.584 82.88-99.584 136.32 0 31.744 58.048 335.36 205.568 431.36 10.112 28.096 28.288 67.776 48.896 95.808 20.096 131.328 131.328 232.512 268.224 232.512 127.36 0 232.768-87.36 263.04-205.184C912.704 738.24 960 679.488 960 612.992 960 533.184 892.224 463.616 810.688 463.616zM810.688 662.72c-27.584 0-49.792-22.272-49.792-49.728 0-27.584 22.272-49.792 49.792-49.792 27.52 0 49.728 22.272 49.728 49.792C860.416 640.512 838.208 662.72 810.688 662.72z',
    service: 'M862.336 700.672c-38.976 0-74.816 13.824-102.784 36.8l0.192-0.512c0 0-52.48 53.824-136.256 35.072l-251.2-67.264C320.64 686.08 298.24 649.024 290.048 630.528 284.352 611.968 275.264 595.008 263.296 580.288l0.192 0c0 0-45.888-52.992-28.096-129.088l38.976-145.728c14.72-44.48 47.68-62.144 64.384-70.656 23.616-8.768 43.776-24.704 57.728-45.184C406.656 177.344 433.984 150.784 482.56 148.224l226.624 0c36.992 3.008 58.624 26.816 65.344 35.52 0.448 0.64 0.896 1.28 1.28 1.856l0 0c0 0 28.032 37.76 16.192 81.536l0 0-24.512 91.648c-0.256 0.768-0.512 1.472-0.768 2.368-9.792 36.48-31.04 54.336-43.072 61.76-16.256 5.632-30.528 15.552-41.344 28.48-0.128 0.128-0.32 0.32-0.512 0.512-3.392 4.096-6.528 8.64-9.152 13.312-17.92 19.264-46.272 19.776-48.256 19.776L624.256 484.992 620.48 484.992C612.544 484.608 593.28 481.6 575.808 462.4c-0.64-0.896-1.344-1.728-2.048-2.624C563.072 444.736 563.072 430.144 564.288 421.888l2.432-8.896C568.832 407.744 575.552 393.6 589.76 386.368c25.408-9.6 43.584-34.176 43.584-62.976C633.344 286.144 603.2 256 565.952 256 528.768 256 498.56 286.144 498.56 323.392c0 12.672 3.52 24.512 9.6 34.688 8.64 25.088 5.632 44.16 5.632 44.16s0 0.064-0.064 0.256L511.936 409.344C509.056 416.384 501.824 427.2 483.584 436.352 452.928 447.872 431.168 477.376 431.168 512c0 44.672 36.16 80.832 80.832 80.832 26.048 0 49.28-12.288 64-31.36 23.296-21.888 45.952-22.528 45.952-22.528l8.064 0c10.56 0.832 29.696 5.12 45.312 24.256 16.896 25.984 46.016 43.136 79.232 43.136 52.096 0 94.272-42.24 94.272-94.336 0-22.528-7.872-43.264-21.056-59.52-6.72-14.272-17.728-43.264-10.496-70.528 0.448-1.344 0.704-2.688 0.96-4.096l24.896-92.992c13.12-39.232 47.936-58.24 59.008-63.424 39.872-15.808 68.096-54.656 68.096-100.16 0-59.52-48.384-107.84-107.904-107.84-33.344 0-63.296 15.296-83.136 39.168l0.064-0.448c0 0-29.312 42.112-84.928 42.112l-201.6 0c-55.68-0.064-84.672-27.328-95.296-40.256C375.616 21.504 338.496 0 296.448 0 229.504 0 175.168 54.272 175.168 121.28c0 28.672 9.92 54.976 26.56 75.776 20.608 29.44 28.032 67.2 18.304 102.72C219.904 300.608 219.712 301.376 219.52 302.144L183.36 437.056C160.64 517.44 94.4 535.232 94.4 535.232l0.576 0.192C39.424 556.736 0 610.56 0 673.664c0 81.792 66.368 148.224 148.224 148.224 38.208 0 73.024-14.528 99.264-38.272 17.024-11.712 64.768-38.656 127.36-21.888 4.096 1.152 8.064 1.92 11.84 2.688l222.976 59.776c65.536 20.288 93.888 77.312 100.288 92.288C732.288 979.2 792.064 1024 862.336 1024 951.68 1024 1024 951.552 1024 862.336 1024 772.992 951.68 700.672 862.336 700.672z',
    task: 'M638.4 407.104C603.072 371.968 557.184 354.432 510.848 354.432S418.688 371.968 383.36 407.104c-35.328 35.2-52.864 81.088-52.864 127.104 0 46.016 17.536 91.776 52.864 126.976 35.328 35.2 81.28 52.608 127.616 52.608 46.272 0 92.032-17.408 127.36-52.608 35.392-35.264 52.864-81.024 52.928-126.976C691.264 488 673.728 442.304 638.4 407.104zM613.248 470.848 527.488 549.76C527.232 550.016 526.848 550.144 526.592 550.4 519.296 558.144 507.584 560.896 497.088 555.84L399.744 508.608c-12.672-6.208-18.176-21.12-12.224-33.344 6.016-12.16 21.12-17.216 33.728-11.008l82.688 40.192 75.84-69.76c10.304-9.536 26.24-9.28 35.456 0.64C624.448 445.376 623.552 461.248 613.248 470.848zM512 64C264.64 64 64 264.576 64 512c0 247.36 200.64 448 448 448 247.424 0 448-200.64 448-448C960 264.576 759.424 64 512 64zM335.68 258.304c27.456 0 51.712 13.824 66.048 34.944C373.824 306.88 348.096 324.992 325.504 347.584 309.824 363.2 296.256 380.288 284.736 398.656 267.264 384.064 256 362.176 256 337.664 256 293.824 291.776 258.304 335.68 258.304zM675.264 697.984c-45.248 44.992-104.832 67.712-164.16 67.712L510.976 765.696 510.72 765.696c-59.328 0-118.912-22.656-164.16-67.712C301.248 652.8 278.464 593.344 278.592 534.272 278.464 491.712 290.304 448.896 313.856 411.52c9.28-14.592 20.032-28.352 32.704-41.024 18.496-18.304 39.232-33.024 61.44-43.904 32.384-15.872 67.648-23.936 102.656-23.936l0.192 0 0.192 0c36.8 0 73.92 8.832 107.456 26.304 20.416 10.496 39.68 24.384 56.768 41.472L675.264 370.432c13.12 13.12 24.256 27.392 33.536 42.432 22.848 37.12 34.56 79.296 34.432 121.344C743.36 593.344 720.512 652.8 675.264 697.984zM739.328 398.592c-11.456-18.24-25.024-35.456-40.704-51.072-22.656-22.528-48.32-40.64-76.224-54.336 14.336-21.056 38.528-34.88 65.984-34.88C732.352 258.304 768 293.76 768 337.664 768 362.112 756.8 384.064 739.328 398.592z'
  }
}

export default Utils
