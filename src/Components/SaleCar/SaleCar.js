import React from "react";
import "./SaleCar.css";

const SaleCar = () => {

  
  return (
    <div
      className="container mx-auto sale-car"
      style={{ maxWidth: "1358px", maxHeight: "1173px", marginTop:'20px' }}
    >
      <h3 className="text-center sale-car-top-title">
        We Have Everything You Need
      </h3>
      <div className="row mx-auto">
        {/* Card 1 */}
        <div className="col-md-6 col-12 col-lg-3 mb-5">
          <div className="card sale-car-card mx-auto">
            <div className="sale-car-title">
              <h4 className="card-title text-center mt-4 mx-auto">Dodge Charger</h4>
            </div>
            <div className="sale-car-image">
              <img
                src="https://s3-alpha-sig.figma.com/img/0b2d/f7ab/88b3840c06a95b37b46f049e9af4b575?Expires=1690761600&Signature=oDTBIiwpUn74OZp-AV2XhD2aMEU3kBwbSQbt6x6pI~ubkJCR5rm2~kpMlCnZ3jl8227kOuu~AyLV45LCwLTlTc88ca5Omm1JQfn2mDjH6kAblZvc4nOVYV9C5QqDQAEwIhAWUpSyPAz~ZhwNdtXkDRgCpZc5yGBpIxgjuVrkDeXfdOs3ihU~kgRXlMaMyZZaf32x6PPlk7rDwwCVgizn-0oJK4NmH0YSdLHcmhKrmjrBEltX9DQ6QotjGVHxApM5~TYuDilxCTH0GPBMzrFkKvdw3sxL~Y9P~ve~-ac3ushc3axj1J4xj0Ey24jSyl2XLChBR9FvM7l59N-5SIwGwQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                className="card-img-top img-fluid sale-car-img1"
                alt="Car 1"
              />
            </div>
            <div className="card-body sale-car-details">
              <p className="card-text ml-2 sale-car-details-p">2016</p>
              <div className="d-flex align-items-center">
                <div className="row w-100">
                  <div className="d-flex align-items-center col-4">
                    <span className="w-100">
                      <img
                        src="https://s3-alpha-sig.figma.com/img/344e/ffe9/990ed3b4be43886be84de9f4dea52b3b?Expires=1690761600&Signature=I3q8hDnqrUKkzdLM3n3kLJ2hWAOnwO2FatM9wiiEen-NKNmdUQ~udgfsg4A4sqH~dNXl9grHz-fYMBhB1bBekaRx9-zbbVqv0BWIwbDObFv5psE3vZIfemUtNgR6kcq0a5JoqnY~fqeFomA5q9EaBYM95AB3XOB88XjMso9wJGiA-h-oO4clWeQAiEpEZyZBkJmYJdLpkMZlD1zggLzeZxyuM~fk2ZprSks7I90lC93Wahy-YLU9iLqZUFZnw476pFEGRXjdAOIxhZKnyXWJH2aM8RrjjUE4y2xM7ScSGGupJki1k5TLVlfUbJCDeHutz23L-K2i8KfVp~ekiRMZtA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                        alt=""
                        style={{ width: "22px", height: "22px", marginTop:'-5px' }}
                      />
                      15k
                    </span>
                  </div>
                  <div className="d-flex align-items-center col-4">
                    <span className="w-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <g clip-path="url(#clip0_1_471)">
                          <path
                            d="M9 16H11V8H9V16ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM13 16H15V8H13V16Z"
                            fill="#F1BC00"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1_471">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      Auto
                    </span>
                  </div>
                  <div className="d-flex align-items-center col-4">
                    <span className="w-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M19.1152 4.7L19.1273 4.68889L14.6182 0.555556L13.3333 1.73333L15.8909 4.07778C14.7515 4.47778 13.9394 5.47778 13.9394 6.66667C13.9394 8.2 15.297 9.44444 16.9697 9.44444C17.4061 9.44444 17.8061 9.35556 18.1818 9.21111V17.2222C18.1818 17.8333 17.6364 18.3333 16.9697 18.3333C16.303 18.3333 15.7576 17.8333 15.7576 17.2222V12.2222C15.7576 11 14.6667 10 13.3333 10H12.1212V2.22222C12.1212 1 11.0303 0 9.69697 0H2.42424C1.09091 0 0 1 0 2.22222V20H12.1212V11.6667H13.9394V17.2222C13.9394 18.7556 15.297 20 16.9697 20C18.6424 20 20 18.7556 20 17.2222V6.66667C20 5.9 19.6606 5.2 19.1152 4.7ZM16.9697 7.77778C16.303 7.77778 15.7576 7.27778 15.7576 6.66667C15.7576 6.05556 16.303 5.55556 16.9697 5.55556C17.6364 5.55556 18.1818 6.05556 18.1818 6.66667C18.1818 7.27778 17.6364 7.77778 16.9697 7.77778ZM4.84848 16.6667V11.6667H2.42424L7.27273 3.33333V8.88889H9.69697L4.84848 16.6667Z"
                          fill="#F1BC00"
                        />
                      </svg>{" "}
                      Auto
                    </span>
                  </div>
                </div>
              </div>
              <p className="w-100 mt-3 text-center sale-car-price-p">10.000$</p>
              <button className="btn sale-car-button">Rent</button>
            </div>
          </div>
        </div>


        <div className="col-md-6 col-12 col-lg-3  mb-5">
          <div className="card sale-car-card mx-auto">
            <div className="sale-car-title">
              <h4 className="card-title text-center mt-4 mx-auto">Audi RS7 </h4>
            </div>
            <div className="sale-car-image">
              <img
                src="https://s3-alpha-sig.figma.com/img/e01f/486e/5a08a7b3bbae91f0141836d3bc5c5aa6?Expires=1690761600&Signature=gdhmQGfBPS8Up8-a6WshF2SmK3FQ9JSbdnWfgyIakp74DLdvhpCPqDi0-e6wMyoXYAwmDrEQj6q6kVg8D~vJbr~Pig-Eko0hlENNIAWeqRr4~Fc-1yxCh3Nawa-kVzHNPhbCdAlM5sYUtsh1HJXZ5sUMOWosvEQkZiKMb~vGW7~R~U8CrWxOoxPtINyf9hAfKlxnapbNeAZS-TjUHkwod5JCNspvI5ar2cx1uSh8MW9klfD6Ze-XbO~8TbaCRQ1tq-TeZdriz8ccGm1QleuJcLB~NNECgJb6KGsxFGrWmkYXBaoFaXpdmO3UbVSf2C~lXWEHEaaZArB4UrHc9CyCrA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                className="card-img-top img-fluid sale-car-img2"
                alt="Car 1"
              />
            </div>
            <div className="card-body sale-car-details">
              <p className="card-text sale-car-details-p">2016</p>
              <div className="d-flex align-items-center">
                <div className="row w-100">
                  <div className="d-flex align-items-center col-4">
                    <span className="w-100">
                      <img
                        src="https://s3-alpha-sig.figma.com/img/344e/ffe9/990ed3b4be43886be84de9f4dea52b3b?Expires=1690761600&Signature=I3q8hDnqrUKkzdLM3n3kLJ2hWAOnwO2FatM9wiiEen-NKNmdUQ~udgfsg4A4sqH~dNXl9grHz-fYMBhB1bBekaRx9-zbbVqv0BWIwbDObFv5psE3vZIfemUtNgR6kcq0a5JoqnY~fqeFomA5q9EaBYM95AB3XOB88XjMso9wJGiA-h-oO4clWeQAiEpEZyZBkJmYJdLpkMZlD1zggLzeZxyuM~fk2ZprSks7I90lC93Wahy-YLU9iLqZUFZnw476pFEGRXjdAOIxhZKnyXWJH2aM8RrjjUE4y2xM7ScSGGupJki1k5TLVlfUbJCDeHutz23L-K2i8KfVp~ekiRMZtA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                        alt=""
                        style={{ width: "22px", height: "22px", marginTop:'-5px' }}
                      />
                      15k
                    </span>
                  </div>
                  <div className="d-flex align-items-center col-4">
                    <span className="w-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <g clip-path="url(#clip0_1_471)">
                          <path
                            d="M9 16H11V8H9V16ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM13 16H15V8H13V16Z"
                            fill="#F1BC00"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1_471">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      Auto
                    </span>
                  </div>
                  <div className="d-flex align-items-center col-4">
                    <span className="w-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M19.1152 4.7L19.1273 4.68889L14.6182 0.555556L13.3333 1.73333L15.8909 4.07778C14.7515 4.47778 13.9394 5.47778 13.9394 6.66667C13.9394 8.2 15.297 9.44444 16.9697 9.44444C17.4061 9.44444 17.8061 9.35556 18.1818 9.21111V17.2222C18.1818 17.8333 17.6364 18.3333 16.9697 18.3333C16.303 18.3333 15.7576 17.8333 15.7576 17.2222V12.2222C15.7576 11 14.6667 10 13.3333 10H12.1212V2.22222C12.1212 1 11.0303 0 9.69697 0H2.42424C1.09091 0 0 1 0 2.22222V20H12.1212V11.6667H13.9394V17.2222C13.9394 18.7556 15.297 20 16.9697 20C18.6424 20 20 18.7556 20 17.2222V6.66667C20 5.9 19.6606 5.2 19.1152 4.7ZM16.9697 7.77778C16.303 7.77778 15.7576 7.27778 15.7576 6.66667C15.7576 6.05556 16.303 5.55556 16.9697 5.55556C17.6364 5.55556 18.1818 6.05556 18.1818 6.66667C18.1818 7.27778 17.6364 7.77778 16.9697 7.77778ZM4.84848 16.6667V11.6667H2.42424L7.27273 3.33333V8.88889H9.69697L4.84848 16.6667Z"
                          fill="#F1BC00"
                        />
                      </svg>{" "}
                      Auto
                    </span>
                  </div>
                </div>
              </div>
              <p className="w-100 mt-3 text-center sale-car-price-p">60.000$</p>
              <button className="btn sale-car-button">Buy</button>
            </div>
          </div>
        </div>


        <div className="col-md-6 col-12 col-lg-3 mb-5">
          <div className="card sale-car-card mx-auto">
            <div className="sale-car-title">
              <h4 className="card-title text-center mt-4 mx-auto">Audi RS7 </h4>
            </div>
            <div className="sale-car-image" >
              <img
                src="https://s3-alpha-sig.figma.com/img/e456/0d59/9f015538df1d27121250e7895afbdbfe?Expires=1690761600&Signature=ALaBZGVWBVrxdjuXaNEApt2lh0JlqzZEOAVrC-4Bjso36-e29FKXVTdvEqdrYUGDDczsbOyoLoybrNmxFY80Z7TKPPKIeNQwatsbW5wRZm3dPZAaSj8ElQ3lNI6Yq4d5eC4-kfzrmVwTutv56MAHBJF1cV7zxuncHckLCwUMd1l5QsksiPnzEDl3JeDL76SCAd7qYAyqeMp230jvzRHysikBWP-j6i3tJkMpt5gqiZcChq94YnBnEM228KHEnDYkqtWeeNsBk0~fb2K8qsHyBKxfY~Kh-VmrouyAQA9PN4AJ0Ea3MWssWsFxVg1IbURIYM13srRfAwsqFenSKxrL8w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                className="card-img-top img-fluid sale-car-img3"
                alt="Car 1"
              />
            </div>
            <div className="card-body sale-car-details">
              <p className="card-text sale-car-details-p">2016</p>
              <div className="d-flex align-items-center">
                <div className="row w-100">
                  <div className="d-flex align-items-center col-4">
                    <span className="w-100">
                      <img
                        src="https://s3-alpha-sig.figma.com/img/344e/ffe9/990ed3b4be43886be84de9f4dea52b3b?Expires=1690761600&Signature=I3q8hDnqrUKkzdLM3n3kLJ2hWAOnwO2FatM9wiiEen-NKNmdUQ~udgfsg4A4sqH~dNXl9grHz-fYMBhB1bBekaRx9-zbbVqv0BWIwbDObFv5psE3vZIfemUtNgR6kcq0a5JoqnY~fqeFomA5q9EaBYM95AB3XOB88XjMso9wJGiA-h-oO4clWeQAiEpEZyZBkJmYJdLpkMZlD1zggLzeZxyuM~fk2ZprSks7I90lC93Wahy-YLU9iLqZUFZnw476pFEGRXjdAOIxhZKnyXWJH2aM8RrjjUE4y2xM7ScSGGupJki1k5TLVlfUbJCDeHutz23L-K2i8KfVp~ekiRMZtA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                        alt=""
                        style={{ width: "22px", height: "22px", marginTop:'-5px' }}
                      />
                      15k
                    </span>
                  </div>
                  <div className="d-flex align-items-center col-4">
                    <span className="w-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <g clip-path="url(#clip0_1_471)">
                          <path
                            d="M9 16H11V8H9V16ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM13 16H15V8H13V16Z"
                            fill="#F1BC00"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1_471">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      Auto
                    </span>
                  </div>
                  <div className="d-flex align-items-center col-4">
                    <span className="w-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M19.1152 4.7L19.1273 4.68889L14.6182 0.555556L13.3333 1.73333L15.8909 4.07778C14.7515 4.47778 13.9394 5.47778 13.9394 6.66667C13.9394 8.2 15.297 9.44444 16.9697 9.44444C17.4061 9.44444 17.8061 9.35556 18.1818 9.21111V17.2222C18.1818 17.8333 17.6364 18.3333 16.9697 18.3333C16.303 18.3333 15.7576 17.8333 15.7576 17.2222V12.2222C15.7576 11 14.6667 10 13.3333 10H12.1212V2.22222C12.1212 1 11.0303 0 9.69697 0H2.42424C1.09091 0 0 1 0 2.22222V20H12.1212V11.6667H13.9394V17.2222C13.9394 18.7556 15.297 20 16.9697 20C18.6424 20 20 18.7556 20 17.2222V6.66667C20 5.9 19.6606 5.2 19.1152 4.7ZM16.9697 7.77778C16.303 7.77778 15.7576 7.27778 15.7576 6.66667C15.7576 6.05556 16.303 5.55556 16.9697 5.55556C17.6364 5.55556 18.1818 6.05556 18.1818 6.66667C18.1818 7.27778 17.6364 7.77778 16.9697 7.77778ZM4.84848 16.6667V11.6667H2.42424L7.27273 3.33333V8.88889H9.69697L4.84848 16.6667Z"
                          fill="#F1BC00"
                        />
                      </svg>
                      Auto
                    </span>
                  </div>
                </div>
              </div>
              <p className="w-100 mt-3 text-center sale-car-price-p">15.000$</p>
              <button className="btn sale-car-button">Rent</button>
            </div>
          </div>
        </div>


        <div className="col-md-6 col-12 col-lg-3 mb-5">
          <div className="card sale-car-card mx-auto">
            <div className="sale-car-title ">
              <h4 className="card-title text-center mt-4 mx-auto">
                Range Rover
              </h4>
              <h4 className="card-title text-center mx-auto">Velar</h4>
            </div>
            <div className="sale-car-image ">
              <img
                src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSLZXsOCyKjYPT8_7WqFDjjQxikg2A5wJNTWnmaMdjkrSpuRJOd"
                className="card-img-top img-fluid sale-car-img4"
                alt="Car 1"
              />
            </div>
            <div className="card-body sale-car-details">
              <p className="card-text sale-car-details-p">2016</p>
              <div className="d-flex align-items-center">
                <div className="row w-100">
                  <div className="d-flex align-items-center col-4">
                    <span className="w-100">
                      <img
                        src="https://s3-alpha-sig.figma.com/img/344e/ffe9/990ed3b4be43886be84de9f4dea52b3b?Expires=1690761600&Signature=I3q8hDnqrUKkzdLM3n3kLJ2hWAOnwO2FatM9wiiEen-NKNmdUQ~udgfsg4A4sqH~dNXl9grHz-fYMBhB1bBekaRx9-zbbVqv0BWIwbDObFv5psE3vZIfemUtNgR6kcq0a5JoqnY~fqeFomA5q9EaBYM95AB3XOB88XjMso9wJGiA-h-oO4clWeQAiEpEZyZBkJmYJdLpkMZlD1zggLzeZxyuM~fk2ZprSks7I90lC93Wahy-YLU9iLqZUFZnw476pFEGRXjdAOIxhZKnyXWJH2aM8RrjjUE4y2xM7ScSGGupJki1k5TLVlfUbJCDeHutz23L-K2i8KfVp~ekiRMZtA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                        alt=""
                        style={{ width: "22px", height: "22px" , marginTop:'-5px'}}
                      />
                      15k
                    </span>
                  </div>
                  <div className="d-flex align-items-center col-4">
                    <span className="w-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <g clip-path="url(#clip0_1_471)">
                          <path
                            d="M9 16H11V8H9V16ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM13 16H15V8H13V16Z"
                            fill="#F1BC00"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1_471">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      Auto
                    </span>
                  </div>
                  <div className="d-flex align-items-center col-4">
                    <span className="w-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M19.1152 4.7L19.1273 4.68889L14.6182 0.555556L13.3333 1.73333L15.8909 4.07778C14.7515 4.47778 13.9394 5.47778 13.9394 6.66667C13.9394 8.2 15.297 9.44444 16.9697 9.44444C17.4061 9.44444 17.8061 9.35556 18.1818 9.21111V17.2222C18.1818 17.8333 17.6364 18.3333 16.9697 18.3333C16.303 18.3333 15.7576 17.8333 15.7576 17.2222V12.2222C15.7576 11 14.6667 10 13.3333 10H12.1212V2.22222C12.1212 1 11.0303 0 9.69697 0H2.42424C1.09091 0 0 1 0 2.22222V20H12.1212V11.6667H13.9394V17.2222C13.9394 18.7556 15.297 20 16.9697 20C18.6424 20 20 18.7556 20 17.2222V6.66667C20 5.9 19.6606 5.2 19.1152 4.7ZM16.9697 7.77778C16.303 7.77778 15.7576 7.27778 15.7576 6.66667C15.7576 6.05556 16.303 5.55556 16.9697 5.55556C17.6364 5.55556 18.1818 6.05556 18.1818 6.66667C18.1818 7.27778 17.6364 7.77778 16.9697 7.77778ZM4.84848 16.6667V11.6667H2.42424L7.27273 3.33333V8.88889H9.69697L4.84848 16.6667Z"
                          fill="#F1BC00"
                        />
                      </svg>{" "}
                      Auto
                    </span>
                  </div>
                </div>
              </div>
              <p className="w-100 mt-3 text-center sale-car-price-p">10.000$</p>
              <button className="btn sale-car-button">Rent</button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 mx-auto sale-car-luxury-container" >
        <h4 className="text-center sale-car-luxury-title">Our Luxury Brand</h4>
        <div className="row w-100 sale-car-luxury-brand">
          <div className="d-flex align-items-center col-4 col-sm-6 col-md-3 col-lg-3 mx-auto mb-4">
            <span className="mx-auto">
              <img
                src="https://s3-alpha-sig.figma.com/img/c14b/9045/864362fe633c3669f526efacbe57ca00?Expires=1690761600&Signature=K16TKP1SFwhcPeObHu8xUKfnNBhH7OzMMCzVbTTxXtCt7~UOtoqFuAXa1lCikvuDN8XxlBZz~Q2dzbhamqXdNxl0bY1Z3YMym0X06jk7f8KHg5oGDK48Kw6HTj8e0CEFzWOUKf-lBP~mTndfq5CfBDMPjo8YdE0D-FMHTwkz6UBSfMYRrL2EmdFjrhrt8rF4csRuMyte9JuFOKMi93lLpxAbFOlJeSssXxA-rd3XCmtrVHnlEM9shEASbXY9Psku0lPDR5AfB0x6eUWpCcDefpsul2yF3MdGRkrFkmWsaBy5SbKe6nt0SEkQ217U5P4aFdCI5p0aRDlmsC24Hov5hA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt=""
                style={{ width: "79px", height: "61px" }}
              />
              Audi
            </span>
          </div>
          <div className="d-flex align-items-center col-4 col-sm-6 col-md-3 col-lg-2 mx-auto mb-4">
            <span className="mx-auto">
              <img
                src="https://s3-alpha-sig.figma.com/img/8678/db6f/cf9b4c2dbfcf8d0887c6f7349ec22cc7?Expires=1690761600&Signature=n863syDF4b482JF~67zUkrk6~ifMSkawU2urdmFflq4QKeKmNUXWQBPea1V2Rf8cer2PWVID9wZBFwgHHyDFFYcwczWb0eHf8KA8AFy3LfayGjbW5dvpU~IafboSQLfvmlPDiUyjX0-OQ7xDQgWTJb4ebbhHTFetFoZrb85dtT2dDqaB71M8PHoCnsQJv6D~Xf3Z9cGCkyUauOr5LrZtXeiHPmp4z-lNrepTYei630PeLNN66WhNREpLPh88pGZcmX6S4wefuUE9FJo7DjKT9AVhVvOtehQNzPFStMAu2GcYbTG17tKDOBrgqEL8IxxOHuPEgHetmCEOtvQu9EFO5Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt=""
                style={{ width: "80.42px", height: "57.367px" }}
              />
              Mercedez
            </span>
          </div>
          <div className="d-flex align-items-center col-4 col-sm-4 col-md-3 col-lg-2 mx-auto mb-4">
            <span className="mx-auto">
              <img
                src="https://s3-alpha-sig.figma.com/img/64ad/a724/f9f3599017ccd251c92097456de54f4a?Expires=1690761600&Signature=Pew2jSldij-7R0TuBEeEr57oD~OMVsOxuNz7Zn3~zGrdKjGT7l4WQqiSSsbDMshv7kkRK4RVe6zkfFhdH2a1WLZU4og58C00o5XI-JJHb2ZuqpLAoPgOi8HIoHttreVO0qBW7qtqf8w-2yTN7tKiULSYh~3hU9BzOy2JCBTRiMPryLGYvQFxaz9Rk1pItdMQ0zdQk~KcUhGshamVuMhNly6KarWD2UlGrU6grU7QCIR~piA2JFYZ48VKMJvKl7cqzG49xii29ZoqVuT3o2HGpje1dtT-W91GaSI3jOdFk53KgwOg31hSMyJj5M7sRxseSnx9AkN-8SxZSOFGhSzSAA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt=""
                style={{ width: "50px", height: "38px" }}
              />
              Land Rover
            </span>
          </div>
          <div className="d-flex align-items-center col-4 col-sm-4  col-md-3 col-lg-2 mx-auto mb-4">
            <span className="mx-auto">
              <img
                src="https://s3-alpha-sig.figma.com/img/a66e/9306/7505659aa66c6d47e278f9708b0895ac?Expires=1690761600&Signature=a1kiCm9algZvLNAOl2DciIZ128CFIMx5h52H~s~Ucs6wu615RTV02PZAATw0MXw~1TyrrSNeiKxevYSwXpxT3qyJ~5XtB8~Vpd2oVKAvVV7ZUy90V10eJH7J7n0A0COapTj7FUIL0WXyr7YkZjQfsSkJrmhyY3o6EviQfa~qMRU5uG3QANRpJ5uAEyehgLJ4XoZ~92z2TpGju4CM1h7KIYZm7NYi3EdWS52uzxM57g0ieiw3-ZKjLcTy-2re~IXuL3wWaqiCelKMaAZJVdZaGrtao0aMi-1mGCxJP-nwWRDviI3-sWoXMyfO7z-NvayX0HgJ~QlsJeROez1lU1X5Zg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt=""
                style={{ width: "63px", height: "50px" }}
              />
              Ferrari
            </span>
          </div>
          <div className="d-flex align-items-center col-4 col-sm-4 col-md-3 col-lg-3 mx-auto mb-4">
            <span className="mx-auto">
              <img
                src="https://s3-alpha-sig.figma.com/img/2b89/4efc/566fdfc88d8e96adfd6b25b5aef9d87d?Expires=1690761600&Signature=UsMetPkgoExMrsMT60NIlkE1p9MHdK2pgkNb6sYvYZG6yOj9-22V~Se4WfeYApPTzcuI9Es6IXO2vLjYjYMTyEddp8o~8mewYzzsc0wHmFRGdcOzOnU~OW4-TDAnxk6LviG5aXz6ij8zITIVmuSHw4h6GJjPiPquusNjHSdFTA57En5rbF130jWGVkeL2PDOsrZBq79FjmrmvqItLitgPcEE3-Gr9yI4ZFSJRJtLdAF~lSZKgdtMKyCoBtcZrR-GhP8Tb3oGEdlnGVc1Eb2emymg2cBHn-5yBZ6vNBtn363QoB6y7Gm0evSGdAu~rNniI-OjELxl08KpMfwHre84Hg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt=""
                style={{ width: "57px", height: "39px" }}
              />
              Tesla
            </span>
          </div>
        </div>
        <p className="w-100 text-center">See The Store</p>
        <div className="mx-auto yellow-rectangle"></div>
      </div>
    </div>
  );
};

export default SaleCar;
