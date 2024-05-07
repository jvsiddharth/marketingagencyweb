import Header from "../components/Header";
import FooterSmall from "../components/FooterSmall";
import styles from './Pricing.module.css';


const Pricing = () => {
  return (
    <div className={styles.pricingV4}>
      <main className={styles.headerParent}>
        <Header />
        <section className={styles.frameWrapper}>
          <div className={styles.frameParent}>
            <div className={styles.frameContainer}>
              <div className={styles.checkmarkShapeParent}>
                <div className={styles.checkmarkShape}>
                  <b className={styles.pricing}>pricing</b>
                </div>
                <div className={styles.affordablePricingPlansParent}>
                  <h1 className={styles.affordablePricingPlans}>
                    Affordable pricing plans
                  </h1>
                  <div className={styles.loremIpsumDolorSitAmetCoWrapper}>
                    <div className={styles.loremIpsumDolor}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Id arcu, convallis est sed. Proin nulla eu a vitae lectus
                      leo suscipit.
                    </div>
                  </div>
                </div>
                <div className={styles.frameDiv}>
                  <div className={styles.frameGroup}>
                    <div className={styles.howManyUsersYouHaveWrapper}>
                      <div className={styles.howManyUsers}>
                        How many users you have?
                      </div>
                    </div>
                    <div className={styles.number}>
                      <div className={styles.numberChild} />
                      <b className={styles.b}>10</b>
                    </div>
                    <div className={styles.usersWrapper}>
                      <b className={styles.users}>users</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.signUpBtn}>
              <div className={styles.pricingCard}>
                <div className={styles.pricingCardChild} />
                <div className={styles.logoContainerWrapper}>
                  <div className={styles.logoContainer}>
                    <div className={styles.logoShape}>
                      <img
                        className={styles.squarepaperPlaneIcon}
                        loading="lazy"
                        alt=""
                        src="/squarepaper-plane.svg"
                      />
                      <div className={styles.logoShapeChild} />
                    </div>
                    <div className={styles.logoContainerInner}>
                      <div className={styles.subtitleParent}>
                        <div className={styles.subtitle}>For individuals</div>
                        <b className={styles.price}>Basic</b>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.frameParent1}>
                  <div className={styles.paragraphWrapper}>
                    <div
                      className={styles.paragraph}
                    >{`Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing elit. `}</div>
                  </div>
                  <div className={styles.frameParent2}>
                    <div className={styles.spacersWrapper}>
                      <div className={styles.spacers} />
                    </div>
                    <div className={styles.frameParent3}>
                      <div className={styles.frameParent4}>
                        <div className={styles.priceParent}>
                          <b className={styles.price1}>$99</b>
                          <div className={styles.frameWrapper1}>
                            <div className={styles.frameParent5}>
                              <div className={styles.spacerWrapper}>
                                <div className={styles.spacer} />
                              </div>
                              <div className={styles.monthly}>/monthly</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.text200Parent}>
                          <b className={styles.text200}>What’s included</b>
                          <div className={styles.px}>
                            <div className={styles.iconsListItem}>
                              <div className={styles.listItem200}>
                                <input
                                  className={styles.filledIconscheckCircle}
                                  type="radio"
                                  name="radioGroup-1"
                                />
                                <div className={styles.text2001}>
                                  All analytics features
                                </div>
                              </div>
                            </div>
                            <div className={styles.iconsListItem1}>
                              <div className={styles.listItem2001}>
                                <input
                                  className={styles.filledIconscheckCircle1}
                                  type="radio"
                                />
                                <div className={styles.text2002}>
                                  Up to 250,000 tracked visits
                                </div>
                              </div>
                            </div>
                            <div className={styles.iconsListItem2}>
                              <div className={styles.listItem2002}>
                                <input
                                  className={styles.filledIconscheckCircle2}
                                  type="radio"
                                />
                                <div className={styles.text2003}>
                                  Normal support
                                </div>
                              </div>
                            </div>
                            <div className={styles.iconsListItem3}>
                              <div className={styles.listItem2003}>
                                <input
                                  className={styles.filledIconscheckCircle3}
                                  type="radio"
                                />
                                <div className={styles.text2004}>
                                  Up to 3 team members
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <button className={styles.primaryButton}>
                        <div className={styles.masterPrimaryButton}>
                          <img
                            className={styles.lineRoundedsearchIcon}
                            alt=""
                            src="/line-roundedsearch.svg"
                          />
                          <b className={styles.buttonText}>Get started</b>
                          <img
                            className={styles.lineRoundedarrowRight}
                            alt=""
                            src="/line-roundedarrow-right.svg"
                          />
                        </div>
                      </button>
                    </div>
                    <div className={styles.spacersContainer}>
                      <div className={styles.spacers1} />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.pricingCard1}>
                <div className={styles.pricingCardInner}>
                  <div className={styles.frameParent6}>
                    <div className={styles.frameWrapper2}>
                      <div className={styles.squarepaperPlaneParent}>
                        <img
                          className={styles.squarepaperPlaneIcon1}
                          alt=""
                          src="/squarepaper-plane-1.svg"
                        />
                        <div className={styles.backgroundPatternParent}>
                          <div className={styles.backgroundPattern} />
                          <div className={styles.frameChild} />
                          <div className={styles.frameItem} />
                        </div>
                      </div>
                    </div>
                    <div className={styles.frameWrapper3}>
                      <div className={styles.subtitleGroup}>
                        <div className={styles.subtitle1}>For startups</div>
                        <b className={styles.price2}>Pro</b>
                      </div>
                    </div>
                    <button className={styles.rectangleParent}>
                      <div className={styles.frameInner} />
                      <div className={styles.popular}>Popular</div>
                    </button>
                  </div>
                </div>
                <div className={styles.frameParent7}>
                  <div className={styles.paragraphContainer}>
                    <div
                      className={styles.paragraph1}
                    >{`Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing elit. `}</div>
                  </div>
                  <div className={styles.frameParent8}>
                    <div className={styles.spacersFrame}>
                      <div className={styles.spacers2} />
                    </div>
                    <div className={styles.frameParent9}>
                      <div className={styles.frameParent10}>
                        <div className={styles.priceGroup}>
                          <b className={styles.price3}>$199</b>
                          <div className={styles.frameWrapper4}>
                            <div className={styles.frameParent11}>
                              <div className={styles.spacerContainer}>
                                <div className={styles.spacer1} />
                              </div>
                              <div className={styles.monthly1}>/monthly</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.text200Group}>
                          <b className={styles.text2005}>What’s included</b>
                          <div className={styles.px1}>
                            <div className={styles.iconsListItem4}>
                              <div className={styles.listItem2004}>
                                <input
                                  className={styles.filledIconscheckCircle4}
                                  type="radio"
                                />
                                <div className={styles.text2006}>
                                  All analytics features
                                </div>
                              </div>
                            </div>
                            <div className={styles.iconsListItem5}>
                              <div className={styles.listItem2005}>
                                <input
                                  className={styles.filledIconscheckCircle5}
                                  type="radio"
                                />
                                <div className={styles.text2007}>
                                  Up to 1,000,000 tracked visits
                                </div>
                              </div>
                            </div>
                            <div className={styles.iconsListItem6}>
                              <div className={styles.listItem2006}>
                                <input
                                  className={styles.filledIconscheckCircle6}
                                  type="radio"
                                />
                                <div className={styles.text2008}>
                                  Premium support
                                </div>
                              </div>
                            </div>
                            <div className={styles.iconsListItem7}>
                              <div className={styles.listItem2007}>
                                <input
                                  className={styles.filledIconscheckCircle7}
                                  type="radio"
                                />
                                <div className={styles.text2009}>
                                  Up to 10 team members
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <button className={styles.primaryButton1}>
                        <div className={styles.masterPrimaryButton1}>
                          <img
                            className={styles.lineRoundedsearchIcon1}
                            alt=""
                            src="/line-roundedsearch.svg"
                          />
                          <b className={styles.buttonText1}>Get started</b>
                          <img
                            className={styles.lineRoundedarrowRight1}
                            alt=""
                            src="/line-roundedarrow-right.svg"
                          />
                        </div>
                      </button>
                    </div>
                    <div className={styles.spacersWrapper1}>
                      <div className={styles.spacers3} />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.pricingCard2}>
                <div className={styles.pricingCardInner1}>
                  <div className={styles.frameParent12}>
                    <div className={styles.squarepaperPlaneGroup}>
                      <img
                        className={styles.squarepaperPlaneIcon2}
                        alt=""
                        src="/squarepaper-plane.svg"
                      />
                      <img
                        className={styles.groupIcon}
                        loading="lazy"
                        alt=""
                        src="/group-39506.svg"
                      />
                    </div>
                    <div className={styles.frameWrapper5}>
                      <div className={styles.subtitleContainer}>
                        <div className={styles.subtitle2}>
                          For big companies
                        </div>
                        <b className={styles.price4}>Enterprise</b>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.frameParent13}>
                  <div className={styles.paragraphFrame}>
                    <div
                      className={styles.paragraph2}
                    >{`Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing elit. `}</div>
                  </div>
                  <div className={styles.frameParent14}>
                    <div className={styles.spacersWrapper2}>
                      <div className={styles.spacers4} />
                    </div>
                    <div className={styles.frameParent15}>
                      <div className={styles.frameParent16}>
                        <div className={styles.priceContainer}>
                          <b className={styles.price5}>$399</b>
                          <div className={styles.frameWrapper6}>
                            <div className={styles.frameParent17}>
                              <div className={styles.spacerFrame}>
                                <div className={styles.spacer2} />
                              </div>
                              <div className={styles.monthly2}>/monthly</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.text200Container}>
                          <b className={styles.text20010}>What’s included</b>
                          <div className={styles.px2}>
                            <div className={styles.iconsListItem8}>
                              <div className={styles.listItem2008}>
                                <input
                                  className={styles.filledIconscheckCircle8}
                                  type="radio"
                                />
                                <div className={styles.text200Wrapper}>
                                  <div className={styles.text20011}>
                                    All analytics features
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={styles.iconsListItem9}>
                              <div className={styles.listItem2009}>
                                <input
                                  className={styles.filledIconscheckCircle9}
                                  type="radio"
                                />
                                <div className={styles.text200Frame}>
                                  <div className={styles.text20012}>
                                    Up to 5,000,000 tracked visits
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={styles.iconsListItem10}>
                              <div className={styles.listItem20010}>
                                <input
                                  className={styles.filledIconscheckCircle10}
                                  type="radio"
                                />
                                <div className={styles.text200Wrapper1}>
                                  <div className={styles.text20013}>
                                    Dedicated support
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={styles.iconsListItem11}>
                              <div className={styles.listItem20011}>
                                <input
                                  className={styles.filledIconscheckCircle11}
                                  type="radio"
                                />
                                <div className={styles.text200Wrapper2}>
                                  <div className={styles.text20014}>
                                    Up to 50 team members
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <button className={styles.primaryButton2}>
                        <div className={styles.masterPrimaryButton2}>
                          <img
                            className={styles.lineRoundedsearchIcon2}
                            alt=""
                            src="/line-roundedsearch.svg"
                          />
                          <b className={styles.buttonText2}>Get started</b>
                          <img
                            className={styles.lineRoundedarrowRight2}
                            alt=""
                            src="/line-roundedarrow-right.svg"
                          />
                        </div>
                      </button>
                    </div>
                    <div className={styles.spacersWrapper3}>
                      <div className={styles.spacers5} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FooterSmall />
    </div>
  );
};

export default Pricing;
