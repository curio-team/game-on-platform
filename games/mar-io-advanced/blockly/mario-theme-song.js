// Not included in full because its too laggy
export const marioThemeSong = `
<block type="game_wait_ms">
	<value name="DELAY">
		<block type="math_number">
			<field name="NUM">0</field>
		</block>
	</value>
	<statement name="DO">
		<block type="sound_play">
			<field name="WAVE">square</field>
			<value name="FREQ">
				<block type="math_number">
					<field name="NUM">146.83</field>
				</block>
			</value>
			<value name="DURATION">
				<block type="math_number">
					<field name="NUM">100</field>
				</block>
			</value>
			<next>
				<block type="sound_play">
					<field name="WAVE">square</field>
					<value name="FREQ">
						<block type="math_number">
							<field name="NUM">659.26</field>
						</block>
					</value>
					<value name="DURATION">
						<block type="math_number">
							<field name="NUM">100</field>
						</block>
					</value>
					<next>
						<block type="sound_play">
							<field name="WAVE">square</field>
							<value name="FREQ">
								<block type="math_number">
									<field name="NUM">369.99</field>
								</block>
							</value>
							<value name="DURATION">
								<block type="math_number">
									<field name="NUM">100</field>
								</block>
							</value>
						</block>
					</next>
				</block>
			</next>
		</block>
	</statement>
	<next>
		<block type="game_wait_ms">
			<value name="DELAY">
				<block type="math_number">
					<field name="NUM">200</field>
				</block>
			</value>
			<statement name="DO">
				<block type="sound_play">
					<field name="WAVE">square</field>
					<value name="FREQ">
						<block type="math_number">
							<field name="NUM">146.83</field>
						</block>
					</value>
					<value name="DURATION">
						<block type="math_number">
							<field name="NUM">100</field>
						</block>
					</value>
					<next>
						<block type="sound_play">
							<field name="WAVE">square</field>
							<value name="FREQ">
								<block type="math_number">
									<field name="NUM">659.26</field>
								</block>
							</value>
							<value name="DURATION">
								<block type="math_number">
									<field name="NUM">100</field>
								</block>
							</value>
							<next>
								<block type="sound_play">
									<field name="WAVE">square</field>
									<value name="FREQ">
										<block type="math_number">
											<field name="NUM">369.99</field>
										</block>
									</value>
									<value name="DURATION">
										<block type="math_number">
											<field name="NUM">100</field>
										</block>
									</value>
								</block>
							</next>
						</block>
					</next>
				</block>
			</statement>
			<next>
				<block type="game_wait_ms">
					<value name="DELAY">
						<block type="math_number">
							<field name="NUM">600</field>
						</block>
					</value>
					<statement name="DO">
						<block type="sound_play">
							<field name="WAVE">square</field>
							<value name="FREQ">
								<block type="math_number">
									<field name="NUM">146.83</field>
								</block>
							</value>
							<value name="DURATION">
								<block type="math_number">
									<field name="NUM">100</field>
								</block>
							</value>
							<next>
								<block type="sound_play">
									<field name="WAVE">square</field>
									<value name="FREQ">
										<block type="math_number">
											<field name="NUM">659.26</field>
										</block>
									</value>
									<value name="DURATION">
										<block type="math_number">
											<field name="NUM">100</field>
										</block>
									</value>
									<next>
										<block type="sound_play">
											<field name="WAVE">square</field>
											<value name="FREQ">
												<block type="math_number">
													<field name="NUM">369.99</field>
												</block>
											</value>
											<value name="DURATION">
												<block type="math_number">
													<field name="NUM">100</field>
												</block>
											</value>
										</block>
									</next>
								</block>
							</next>
						</block>
					</statement>
					<next>
						<block type="game_wait_ms">
							<value name="DELAY">
								<block type="math_number">
									<field name="NUM">1000</field>
								</block>
							</value>
							<statement name="DO">
								<block type="sound_play">
									<field name="WAVE">square</field>
									<value name="FREQ">
										<block type="math_number">
											<field name="NUM">146.83</field>
										</block>
									</value>
									<value name="DURATION">
										<block type="math_number">
											<field name="NUM">100</field>
										</block>
									</value>
									<next>
										<block type="sound_play">
											<field name="WAVE">square</field>
											<value name="FREQ">
												<block type="math_number">
													<field name="NUM">523.25</field>
												</block>
											</value>
											<value name="DURATION">
												<block type="math_number">
													<field name="NUM">100</field>
												</block>
											</value>
											<next>
												<block type="sound_play">
													<field name="WAVE">square</field>
													<value name="FREQ">
														<block type="math_number">
															<field name="NUM">369.99</field>
														</block>
													</value>
													<value name="DURATION">
														<block type="math_number">
															<field name="NUM">100</field>
														</block>
													</value>
												</block>
											</next>
										</block>
									</next>
								</block>
							</statement>
							<next>
								<block type="game_wait_ms">
									<value name="DELAY">
										<block type="math_number">
											<field name="NUM">1200</field>
										</block>
									</value>
									<statement name="DO">
										<block type="sound_play">
											<field name="WAVE">square</field>
											<value name="FREQ">
												<block type="math_number">
													<field name="NUM">146.83</field>
												</block>
											</value>
											<value name="DURATION">
												<block type="math_number">
													<field name="NUM">100</field>
												</block>
											</value>
											<next>
												<block type="sound_play">
													<field name="WAVE">square</field>
													<value name="FREQ">
														<block type="math_number">
															<field name="NUM">659.26</field>
														</block>
													</value>
													<value name="DURATION">
														<block type="math_number">
															<field name="NUM">100</field>
														</block>
													</value>
													<next>
														<block type="sound_play">
															<field name="WAVE">square</field>
															<value name="FREQ">
																<block type="math_number">
																	<field name="NUM">369.99</field>
																</block>
															</value>
															<value name="DURATION">
																<block type="math_number">
																	<field name="NUM">100</field>
																</block>
															</value>
														</block>
													</next>
												</block>
											</next>
										</block>
									</statement>
									<next>
										<block type="game_wait_ms">
											<value name="DELAY">
												<block type="math_number">
													<field name="NUM">1600</field>
												</block>
											</value>
											<statement name="DO">
												<block type="sound_play">
													<field name="WAVE">square</field>
													<value name="FREQ">
														<block type="math_number">
															<field name="NUM">783.99</field>
														</block>
													</value>
													<value name="DURATION">
														<block type="math_number">
															<field name="NUM">100</field>
														</block>
													</value>
													<next>
														<block type="sound_play">
															<field name="WAVE">square</field>
															<value name="FREQ">
																<block type="math_number">
																	<field name="NUM">493.88</field>
																</block>
															</value>
															<value name="DURATION">
																<block type="math_number">
																	<field name="NUM">100</field>
																</block>
															</value>
															<next>
																<block type="sound_play">
																	<field name="WAVE">square</field>
																	<value name="FREQ">
																		<block type="math_number">
																			<field name="NUM">392</field>
																		</block>
																	</value>
																	<value name="DURATION">
																		<block type="math_number">
																			<field name="NUM">100</field>
																		</block>
																	</value>
																</block>
															</next>
														</block>
													</next>
												</block>
											</statement>
											<next>
												<block type="game_wait_ms">
													<value name="DELAY">
														<block type="math_number">
															<field name="NUM">2400</field>
														</block>
													</value>
													<statement name="DO">
														<block type="sound_play">
															<field name="WAVE">square</field>
															<value name="FREQ">
																<block type="math_number">
																	<field name="NUM">196</field>
																</block>
															</value>
															<value name="DURATION">
																<block type="math_number">
																	<field name="NUM">100</field>
																</block>
															</value>
															<next>
																<block type="sound_play">
																	<field name="WAVE">square</field>
																	<value name="FREQ">
																		<block type="math_number">
																			<field name="NUM">392</field>
																		</block>
																	</value>
																	<value name="DURATION">
																		<block type="math_number">
																			<field name="NUM">100</field>
																		</block>
																	</value>
																</block>
															</next>
														</block>
													</statement>
													<next>
														<block type="game_wait_ms">
															<value name="DELAY">
																<block type="math_number">
																	<field name="NUM">3200</field>
																</block>
															</value>
															<statement name="DO">
																<block type="sound_play">
																	<field name="WAVE">square</field>
																	<value name="FREQ">
																		<block type="math_number">
																			<field name="NUM">196</field>
																		</block>
																	</value>
																	<value name="DURATION">
																		<block type="math_number">
																			<field name="NUM">100</field>
																		</block>
																	</value>
																	<next>
																		<block type="sound_play">
																			<field name="WAVE">square</field>
																			<value name="FREQ">
																				<block type="math_number">
																					<field name="NUM">523.25</field>
																				</block>
																			</value>
																			<value name="DURATION">
																				<block type="math_number">
																					<field name="NUM">100</field>
																				</block>
																			</value>
																			<next>
																				<block type="sound_play">
																					<field name="WAVE">square</field>
																					<value name="FREQ">
																						<block type="math_number">
																							<field name="NUM">329.63</field>
																						</block>
																					</value>
																					<value name="DURATION">
																						<block type="math_number">
																							<field name="NUM">100</field>
																						</block>
																					</value>
																				</block>
																			</next>
																		</block>
																	</next>
																</block>
															</statement>
															<next>
																<block type="game_wait_ms">
																	<value name="DELAY">
																		<block type="math_number">
																			<field name="NUM">3800</field>
																		</block>
																	</value>
																	<statement name="DO">
																		<block type="sound_play">
																			<field name="WAVE">square</field>
																			<value name="FREQ">
																				<block type="math_number">
																					<field name="NUM">164.81</field>
																				</block>
																			</value>
																			<value name="DURATION">
																				<block type="math_number">
																					<field name="NUM">100</field>
																				</block>
																			</value>
																			<next>
																				<block type="sound_play">
																					<field name="WAVE">square</field>
																					<value name="FREQ">
																						<block type="math_number">
																							<field name="NUM">392</field>
																						</block>
																					</value>
																					<value name="DURATION">
																						<block type="math_number">
																							<field name="NUM">100</field>
																						</block>
																					</value>
																					<next>
																						<block type="sound_play">
																							<field name="WAVE">square</field>
																							<value name="FREQ">
																								<block type="math_number">
																									<field name="NUM">261.63</field>
																								</block>
																							</value>
																							<value name="DURATION">
																								<block type="math_number">
																									<field name="NUM">100</field>
																								</block>
																							</value>
																						</block>
																					</next>
																				</block>
																			</next>
																		</block>
																	</statement>
																	<next>
																		<block type="game_wait_ms">
																			<value name="DELAY">
																				<block type="math_number">
																					<field name="NUM">4400</field>
																				</block>
																			</value>
																			<statement name="DO">
																				<block type="sound_play">
																					<field name="WAVE">square</field>
																					<value name="FREQ">
																						<block type="math_number">
																							<field name="NUM">130.81</field>
																						</block>
																					</value>
																					<value name="DURATION">
																						<block type="math_number">
																							<field name="NUM">100</field>
																						</block>
																					</value>
																					<next>
																						<block type="sound_play">
																							<field name="WAVE">square</field>
																							<value name="FREQ">
																								<block type="math_number">
																									<field name="NUM">329.63</field>
																								</block>
																							</value>
																							<value name="DURATION">
																								<block type="math_number">
																									<field name="NUM">100</field>
																								</block>
																							</value>
																							<next>
																								<block type="sound_play">
																									<field name="WAVE">square</field>
																									<value name="FREQ">
																										<block type="math_number">
																											<field name="NUM">196</field>
																										</block>
																									</value>
																									<value name="DURATION">
																										<block type="math_number">
																											<field name="NUM">100</field>
																										</block>
																									</value>
																								</block>
																							</next>
																						</block>
																					</next>
																				</block>
																			</statement>
																			<next>
																				<block type="game_wait_ms">
																					<value name="DELAY">
																						<block type="math_number">
																							<field name="NUM">5000</field>
																						</block>
																					</value>
																					<statement name="DO">
																						<block type="sound_play">
																							<field name="WAVE">square</field>
																							<value name="FREQ">
																								<block type="math_number">
																									<field name="NUM">174.61</field>
																								</block>
																							</value>
																							<value name="DURATION">
																								<block type="math_number">
																									<field name="NUM">100</field>
																								</block>
																							</value>
																							<next>
																								<block type="sound_play">
																									<field name="WAVE">square</field>
																									<value name="FREQ">
																										<block type="math_number">
																											<field name="NUM">440</field>
																										</block>
																									</value>
																									<value name="DURATION">
																										<block type="math_number">
																											<field name="NUM">100</field>
																										</block>
																									</value>
																									<next>
																										<block type="sound_play">
																											<field name="WAVE">square</field>
																											<value name="FREQ">
																												<block type="math_number">
																													<field name="NUM">261.63</field>
																												</block>
																											</value>
																											<value name="DURATION">
																												<block type="math_number">
																													<field name="NUM">100</field>
																												</block>
																											</value>
																										</block>
																									</next>
																								</block>
																							</next>
																						</block>
																					</statement>
																					<next>
																						<block type="game_wait_ms">
																							<value name="DELAY">
																								<block type="math_number">
																									<field name="NUM">5400</field>
																								</block>
																							</value>
																							<statement name="DO">
																								<block type="sound_play">
																									<field name="WAVE">square</field>
																									<value name="FREQ">
																										<block type="math_number">
																											<field name="NUM">196</field>
																										</block>
																									</value>
																									<value name="DURATION">
																										<block type="math_number">
																											<field name="NUM">100</field>
																										</block>
																									</value>
																									<next>
																										<block type="sound_play">
																											<field name="WAVE">square</field>
																											<value name="FREQ">
																												<block type="math_number">
																													<field name="NUM">493.88</field>
																												</block>
																											</value>
																											<value name="DURATION">
																												<block type="math_number">
																													<field name="NUM">100</field>
																												</block>
																											</value>
																											<next>
																												<block type="sound_play">
																													<field name="WAVE">square</field>
																													<value name="FREQ">
																														<block type="math_number">
																															<field name="NUM">293.66</field>
																														</block>
																													</value>
																													<value name="DURATION">
																														<block type="math_number">
																															<field name="NUM">100</field>
																														</block>
																													</value>
																												</block>
																											</next>
																										</block>
																									</next>
																								</block>
																							</statement>
																							<next>
																								<block type="game_wait_ms">
																									<value name="DELAY">
																										<block type="math_number">
																											<field name="NUM">5800</field>
																										</block>
																									</value>
																									<statement name="DO">
																										<block type="sound_play">
																											<field name="WAVE">square</field>
																											<value name="FREQ">
																												<block type="math_number">
																													<field name="NUM">185</field>
																												</block>
																											</value>
																											<value name="DURATION">
																												<block type="math_number">
																													<field name="NUM">100</field>
																												</block>
																											</value>
																											<next>
																												<block type="sound_play">
																													<field name="WAVE">square</field>
																													<value name="FREQ">
																														<block type="math_number">
																															<field name="NUM">466.16</field>
																														</block>
																													</value>
																													<value name="DURATION">
																														<block type="math_number">
																															<field name="NUM">100</field>
																														</block>
																													</value>
																													<next>
																														<block type="sound_play">
																															<field name="WAVE">square</field>
																															<value name="FREQ">
																																<block type="math_number">
																																	<field name="NUM">277.18</field>
																																</block>
																															</value>
																															<value name="DURATION">
																																<block type="math_number">
																																	<field name="NUM">100</field>
																																</block>
																															</value>
																														</block>
																													</next>
																												</block>
																											</next>
																										</block>
																									</statement>
																									<next>
																										<block type="game_wait_ms">
																											<value name="DELAY">
																												<block type="math_number">
																													<field name="NUM">6000</field>
																												</block>
																											</value>
																											<statement name="DO">
																												<block type="sound_play">
																													<field name="WAVE">square</field>
																													<value name="FREQ">
																														<block type="math_number">
																															<field name="NUM">174.61</field>
																														</block>
																													</value>
																													<value name="DURATION">
																														<block type="math_number">
																															<field name="NUM">100</field>
																														</block>
																													</value>
																													<next>
																														<block type="sound_play">
																															<field name="WAVE">square</field>
																															<value name="FREQ">
																																<block type="math_number">
																																	<field name="NUM">440</field>
																																</block>
																															</value>
																															<value name="DURATION">
																																<block type="math_number">
																																	<field name="NUM">100</field>
																																</block>
																															</value>
																															<next>
																																<block type="sound_play">
																																	<field name="WAVE">square</field>
																																	<value name="FREQ">
																																		<block type="math_number">
																																			<field name="NUM">261.63</field>
																																		</block>
																																	</value>
																																	<value name="DURATION">
																																		<block type="math_number">
																																			<field name="NUM">100</field>
																																		</block>
																																	</value>
																																</block>
																															</next>
																														</block>
																													</next>
																												</block>
																											</statement>
																											<next>
																												<block type="game_wait_ms">
																													<value name="DELAY">
																														<block type="math_number">
																															<field name="NUM">6400</field>
																														</block>
																													</value>
																													<statement name="DO">
																														<block type="sound_play">
																															<field name="WAVE">square</field>
																															<value name="FREQ">
																																<block type="math_number">
																																	<field name="NUM">164.81</field>
																																</block>
																															</value>
																															<value name="DURATION">
																																<block type="math_number">
																																	<field name="NUM">100</field>
																																</block>
																															</value>
																															<next>
																																<block type="sound_play">
																																	<field name="WAVE">square</field>
																																	<value name="FREQ">
																																		<block type="math_number">
																																			<field name="NUM">392</field>
																																		</block>
																																	</value>
																																	<value name="DURATION">
																																		<block type="math_number">
																																			<field name="NUM">100</field>
																																		</block>
																																	</value>
																																	<next>
																																		<block type="sound_play">
																																			<field name="WAVE">square</field>
																																			<value name="FREQ">
																																				<block type="math_number">
																																					<field name="NUM">261.63</field>
																																				</block>
																																			</value>
																																			<value name="DURATION">
																																				<block type="math_number">
																																					<field name="NUM">100</field>
																																				</block>
																																			</value>
																																		</block>
																																	</next>
																																</block>
																															</next>
																														</block>
																													</statement>
																													<next>
																														<block type="game_wait_ms">
																															<value name="DELAY">
																																<block type="math_number">
																																	<field name="NUM">6600</field>
																																</block>
																															</value>
																															<statement name="DO">
																																<block type="sound_play">
																																	<field name="WAVE">square</field>
																																	<value name="FREQ">
																																		<block type="math_number">
																																			<field name="NUM">261.63</field>
																																		</block>
																																	</value>
																																	<value name="DURATION">
																																		<block type="math_number">
																																			<field name="NUM">100</field>
																																		</block>
																																	</value>
																																	<next>
																																		<block type="sound_play">
																																			<field name="WAVE">square</field>
																																			<value name="FREQ">
																																				<block type="math_number">
																																					<field name="NUM">659.26</field>
																																				</block>
																																			</value>
																																			<value name="DURATION">
																																				<block type="math_number">
																																					<field name="NUM">100</field>
																																				</block>
																																			</value>
																																			<next>
																																				<block type="sound_play">
																																					<field name="WAVE">square</field>
																																					<value name="FREQ">
																																						<block type="math_number">
																																							<field name="NUM">392</field>
																																						</block>
																																					</value>
																																					<value name="DURATION">
																																						<block type="math_number">
																																							<field name="NUM">100</field>
																																						</block>
																																					</value>
																																				</block>
																																			</next>
																																		</block>
																																	</next>
																																</block>
																															</statement>
																															<next>
																																<block type="game_wait_ms">
																																	<value name="DELAY">
																																		<block type="math_number">
																																			<field name="NUM">6900</field>
																																		</block>
																																	</value>
																																	<statement name="DO">
																																		<block type="sound_play">
																																			<field name="WAVE">square</field>
																																			<value name="FREQ">
																																				<block type="math_number">
																																					<field name="NUM">329.63</field>
																																				</block>
																																			</value>
																																			<value name="DURATION">
																																				<block type="math_number">
																																					<field name="NUM">100</field>
																																				</block>
																																			</value>
																																			<next>
																																				<block type="sound_play">
																																					<field name="WAVE">square</field>
																																					<value name="FREQ">
																																						<block type="math_number">
																																							<field name="NUM">783.99</field>
																																						</block>
																																					</value>
																																					<value name="DURATION">
																																						<block type="math_number">
																																							<field name="NUM">100</field>
																																						</block>
																																					</value>
																																					<next>
																																						<block type="sound_play">
																																							<field name="WAVE">square</field>
																																							<value name="FREQ">
																																								<block type="math_number">
																																									<field name="NUM">493.88</field>
																																								</block>
																																							</value>
																																							<value name="DURATION">
																																								<block type="math_number">
																																									<field name="NUM">100</field>
																																								</block>
																																							</value>
																																						</block>
																																					</next>
																																				</block>
																																			</next>
																																		</block>
																																	</statement>
																																	<next>
																																		<block type="game_wait_ms">
																																			<value name="DELAY">
																																				<block type="math_number">
																																					<field name="NUM">7200</field>
																																				</block>
																																			</value>
																																			<statement name="DO">
																																				<block type="sound_play">
																																					<field name="WAVE">square</field>
																																					<value name="FREQ">
																																						<block type="math_number">
																																							<field name="NUM">349.23</field>
																																						</block>
																																					</value>
																																					<value name="DURATION">
																																						<block type="math_number">
																																							<field name="NUM">100</field>
																																						</block>
																																					</value>
																																					<next>
																																						<block type="sound_play">
																																							<field name="WAVE">square</field>
																																							<value name="FREQ">
																																								<block type="math_number">
																																									<field name="NUM">880</field>
																																								</block>
																																							</value>
																																							<value name="DURATION">
																																								<block type="math_number">
																																									<field name="NUM">100</field>
																																								</block>
																																							</value>
																																							<next>
																																								<block type="sound_play">
																																									<field name="WAVE">square</field>
																																									<value name="FREQ">
																																										<block type="math_number">
																																											<field name="NUM">523.25</field>
																																										</block>
																																									</value>
																																									<value name="DURATION">
																																										<block type="math_number">
																																											<field name="NUM">100</field>
																																										</block>
																																									</value>
																																								</block>
																																							</next>
																																						</block>
																																					</next>
																																				</block>
																																			</statement>
																																			<next>
																																				<block type="game_wait_ms">
																																					<value name="DELAY">
																																						<block type="math_number">
																																							<field name="NUM">7600</field>
																																						</block>
																																					</value>
																																					<statement name="DO">
																																						<block type="sound_play">
																																							<field name="WAVE">square</field>
																																							<value name="FREQ">
																																								<block type="math_number">
																																									<field name="NUM">293.66</field>
																																								</block>
																																							</value>
																																							<value name="DURATION">
																																								<block type="math_number">
																																									<field name="NUM">100</field>
																																								</block>
																																							</value>
																																							<next>
																																								<block type="sound_play">
																																									<field name="WAVE">square</field>
																																									<value name="FREQ">
																																										<block type="math_number">
																																											<field name="NUM">698.46</field>
																																										</block>
																																									</value>
																																									<value name="DURATION">
																																										<block type="math_number">
																																											<field name="NUM">100</field>
																																										</block>
																																									</value>
																																									<next>
																																										<block type="sound_play">
																																											<field name="WAVE">square</field>
																																											<value name="FREQ">
																																												<block type="math_number">
																																													<field name="NUM">440</field>
																																												</block>
																																											</value>
																																											<value name="DURATION">
																																												<block type="math_number">
																																													<field name="NUM">100</field>
																																												</block>
																																											</value>
																																										</block>
																																									</next>
																																								</block>
																																							</next>
																																						</block>
																																					</statement>
																																					<next>
																																						<block type="game_wait_ms">
																																							<value name="DELAY">
																																								<block type="math_number">
																																									<field name="NUM">7800</field>
																																								</block>
																																							</value>
																																							<statement name="DO">
																																								<block type="sound_play">
																																									<field name="WAVE">square</field>
																																									<value name="FREQ">
																																										<block type="math_number">
																																											<field name="NUM">329.63</field>
																																										</block>
																																									</value>
																																									<value name="DURATION">
																																										<block type="math_number">
																																											<field name="NUM">100</field>
																																										</block>
																																									</value>
																																									<next>
																																										<block type="sound_play">
																																											<field name="WAVE">square</field>
																																											<value name="FREQ">
																																												<block type="math_number">
																																													<field name="NUM">783.99</field>
																																												</block>
																																											</value>
																																											<value name="DURATION">
																																												<block type="math_number">
																																													<field name="NUM">100</field>
																																												</block>
																																											</value>
																																											<next>
																																												<block type="sound_play">
																																													<field name="WAVE">square</field>
																																													<value name="FREQ">
																																														<block type="math_number">
																																															<field name="NUM">493.88</field>
																																														</block>
																																													</value>
																																													<value name="DURATION">
																																														<block type="math_number">
																																															<field name="NUM">100</field>
																																														</block>
																																													</value>
																																												</block>
																																											</next>
																																										</block>
																																									</next>
																																								</block>
																																							</statement>
																																							<next>
																																								<block type="game_wait_ms">
																																									<value name="DELAY">
																																										<block type="math_number">
																																											<field name="NUM">8200</field>
																																										</block>
																																									</value>
																																									<statement name="DO">
																																										<block type="sound_play">
																																											<field name="WAVE">square</field>
																																											<value name="FREQ">
																																												<block type="math_number">
																																													<field name="NUM">261.63</field>
																																												</block>
																																											</value>
																																											<value name="DURATION">
																																												<block type="math_number">
																																													<field name="NUM">100</field>
																																												</block>
																																											</value>
																																											<next>
																																												<block type="sound_play">
																																													<field name="WAVE">square</field>
																																													<value name="FREQ">
																																														<block type="math_number">
																																															<field name="NUM">659.26</field>
																																														</block>
																																													</value>
																																													<value name="DURATION">
																																														<block type="math_number">
																																															<field name="NUM">100</field>
																																														</block>
																																													</value>
																																													<next>
																																														<block type="sound_play">
																																															<field name="WAVE">square</field>
																																															<value name="FREQ">
																																																<block type="math_number">
																																																	<field name="NUM">440</field>
																																																</block>
																																															</value>
																																															<value name="DURATION">
																																																<block type="math_number">
																																																	<field name="NUM">100</field>
																																																</block>
																																															</value>
																																														</block>
																																													</next>
																																												</block>
																																											</next>
																																										</block>
																																									</statement>
																																									<next>
																																										<block type="game_wait_ms">
																																											<value name="DELAY">
																																												<block type="math_number">
																																													<field name="NUM">8600</field>
																																												</block>
																																											</value>
																																											<statement name="DO">
																																												<block type="sound_play">
																																													<field name="WAVE">square</field>
																																													<value name="FREQ">
																																														<block type="math_number">
																																															<field name="NUM">220</field>
																																														</block>
																																													</value>
																																													<value name="DURATION">
																																														<block type="math_number">
																																															<field name="NUM">100</field>
																																														</block>
																																													</value>
																																													<next>
																																														<block type="sound_play">
																																															<field name="WAVE">square</field>
																																															<value name="FREQ">
																																																<block type="math_number">
																																																	<field name="NUM">523.25</field>
																																																</block>
																																															</value>
																																															<value name="DURATION">
																																																<block type="math_number">
																																																	<field name="NUM">100</field>
																																																</block>
																																															</value>
																																															<next>
																																																<block type="sound_play">
																																																	<field name="WAVE">square</field>
																																																	<value name="FREQ">
																																																		<block type="math_number">
																																																			<field name="NUM">329.63</field>
																																																		</block>
																																																	</value>
																																																	<value name="DURATION">
																																																		<block type="math_number">
																																																			<field name="NUM">100</field>
																																																		</block>
																																																	</value>
																																																</block>
																																															</next>
																																														</block>
																																													</next>
																																												</block>
																																											</statement>
																																											<next>
																																												<block type="game_wait_ms">
																																													<value name="DELAY">
																																														<block type="math_number">
																																															<field name="NUM">8800</field>
																																														</block>
																																													</value>
																																													<statement name="DO">
																																														<block type="sound_play">
																																															<field name="WAVE">square</field>
																																															<value name="FREQ">
																																																<block type="math_number">
																																																	<field name="NUM">246.94</field>
																																																</block>
																																															</value>
																																															<value name="DURATION">
																																																<block type="math_number">
																																																	<field name="NUM">100</field>
																																																</block>
																																															</value>
																																															<next>
																																																<block type="sound_play">
																																																	<field name="WAVE">square</field>
																																																	<value name="FREQ">
																																																		<block type="math_number">
																																																			<field name="NUM">587.33</field>
																																																		</block>
																																																	</value>
																																																	<value name="DURATION">
																																																		<block type="math_number">
																																																			<field name="NUM">100</field>
																																																		</block>
																																																	</value>
																																																	<next>
																																																		<block type="sound_play">
																																																			<field name="WAVE">square</field>
																																																			<value name="FREQ">
																																																				<block type="math_number">
																																																					<field name="NUM">349.23</field>
																																																				</block>
																																																			</value>
																																																			<value name="DURATION">
																																																				<block type="math_number">
																																																					<field name="NUM">100</field>
																																																				</block>
																																																			</value>
																																																		</block>
																																																	</next>
																																																</block>
																																															</next>
																																														</block>
																																													</statement>
																																													<next>
																																														<block type="game_wait_ms">
																																															<value name="DELAY">
																																																<block type="math_number">
																																																	<field name="NUM">9000</field>
																																																</block>
																																															</value>
																																															<statement name="DO">
																																																<block type="sound_play">
																																																	<field name="WAVE">square</field>
																																																	<value name="FREQ">
																																																		<block type="math_number">
																																																			<field name="NUM">196</field>
																																																		</block>
																																																	</value>
																																																	<value name="DURATION">
																																																		<block type="math_number">
																																																			<field name="NUM">100</field>
																																																		</block>
																																																	</value>
																																																	<next>
																																																		<block type="sound_play">
																																																			<field name="WAVE">square</field>
																																																			<value name="FREQ">
																																																				<block type="math_number">
																																																					<field name="NUM">493.88</field>
																																																				</block>
																																																			</value>
																																																			<value name="DURATION">
																																																				<block type="math_number">
																																																					<field name="NUM">100</field>
																																																				</block>
																																																			</value>
																																																			<next>
																																																				<block type="sound_play">
																																																					<field name="WAVE">square</field>
																																																					<value name="FREQ">
																																																						<block type="math_number">
																																																							<field name="NUM">293.66</field>
																																																						</block>
																																																					</value>
																																																					<value name="DURATION">
																																																						<block type="math_number">
																																																							<field name="NUM">100</field>
																																																						</block>
																																																					</value>
																																																				</block>
																																																			</next>
																																																		</block>
																																																	</next>
																																																</block>
																																															</statement>
																																															<next>
																																																<block type="game_wait_ms">
																																																	<value name="DELAY">
																																																		<block type="math_number">
																																																			<field name="NUM">9600</field>
																																																		</block>
																																																	</value>
																																																	<statement name="DO">
																																																		<block type="sound_play">
																																																			<field name="WAVE">square</field>
																																																			<value name="FREQ">
																																																				<block type="math_number">
																																																					<field name="NUM">196</field>
																																																				</block>
																																																			</value>
																																																			<value name="DURATION">
																																																				<block type="math_number">
																																																					<field name="NUM">100</field>
																																																				</block>
																																																			</value>
																																																			<next>
																																																				<block type="sound_play">
																																																					<field name="WAVE">square</field>
																																																					<value name="FREQ">
																																																						<block type="math_number">
																																																							<field name="NUM">523.25</field>
																																																						</block>
																																																					</value>
																																																					<value name="DURATION">
																																																						<block type="math_number">
																																																							<field name="NUM">100</field>
																																																						</block>
																																																					</value>
																																																					<next>
																																																						<block type="sound_play">
																																																							<field name="WAVE">square</field>
																																																							<value name="FREQ">
																																																								<block type="math_number">
																																																									<field name="NUM">329.63</field>
																																																								</block>
																																																							</value>
																																																							<value name="DURATION">
																																																								<block type="math_number">
																																																									<field name="NUM">100</field>
																																																								</block>
																																																							</value>
																																																						</block>
																																																					</next>
																																																				</block>
																																																			</next>
																																																		</block>
																																																	</statement>
																																																	<next>
																																																		<block type="game_wait_ms">
																																																			<value name="DELAY">
																																																				<block type="math_number">
																																																					<field name="NUM">10200</field>
																																																				</block>
																																																			</value>
																																																			<statement name="DO">
																																																				<block type="sound_play">
																																																					<field name="WAVE">square</field>
																																																					<value name="FREQ">
																																																						<block type="math_number">
																																																							<field name="NUM">164.81</field>
																																																						</block>
																																																					</value>
																																																					<value name="DURATION">
																																																						<block type="math_number">
																																																							<field name="NUM">100</field>
																																																						</block>
																																																					</value>
																																																					<next>
																																																						<block type="sound_play">
																																																							<field name="WAVE">square</field>
																																																							<value name="FREQ">
																																																								<block type="math_number">
																																																									<field name="NUM">392</field>
																																																								</block>
																																																							</value>
																																																							<value name="DURATION">
																																																								<block type="math_number">
																																																									<field name="NUM">100</field>
																																																								</block>
																																																							</value>
																																																							<next>
																																																								<block type="sound_play">
																																																									<field name="WAVE">square</field>
																																																									<value name="FREQ">
																																																										<block type="math_number">
																																																											<field name="NUM">261.63</field>
																																																										</block>
																																																									</value>
																																																									<value name="DURATION">
																																																										<block type="math_number">
																																																											<field name="NUM">100</field>
																																																										</block>
																																																									</value>
																																																								</block>
																																																							</next>
																																																						</block>
																																																					</next>
																																																				</block>
																																																			</statement>
																																																			<next>
																																																				<block type="game_wait_ms">
																																																					<value name="DELAY">
																																																						<block type="math_number">
																																																							<field name="NUM">10800</field>
																																																						</block>
																																																					</value>
																																																					<statement name="DO">
																																																						<block type="sound_play">
																																																							<field name="WAVE">square</field>
																																																							<value name="FREQ">
																																																								<block type="math_number">
																																																									<field name="NUM">130.81</field>
																																																								</block>
																																																							</value>
																																																							<value name="DURATION">
																																																								<block type="math_number">
																																																									<field name="NUM">100</field>
																																																								</block>
																																																							</value>
																																																							<next>
																																																								<block type="sound_play">
																																																									<field name="WAVE">square</field>
																																																									<value name="FREQ">
																																																										<block type="math_number">
																																																											<field name="NUM">329.63</field>
																																																										</block>
																																																									</value>
																																																									<value name="DURATION">
																																																										<block type="math_number">
																																																											<field name="NUM">100</field>
																																																										</block>
																																																									</value>
																																																									<next>
																																																										<block type="sound_play">
																																																											<field name="WAVE">square</field>
																																																											<value name="FREQ">
																																																												<block type="math_number">
																																																													<field name="NUM">196</field>
																																																												</block>
																																																											</value>
																																																											<value name="DURATION">
																																																												<block type="math_number">
																																																													<field name="NUM">100</field>
																																																												</block>
																																																											</value>
																																																										</block>
																																																									</next>
																																																								</block>
																																																							</next>
																																																						</block>
																																																					</statement>
																																																					<next>
																																																						<block type="game_wait_ms">
																																																							<value name="DELAY">
																																																								<block type="math_number">
																																																									<field name="NUM">11400</field>
																																																								</block>
																																																							</value>
																																																							<statement name="DO">
																																																								<block type="sound_play">
																																																									<field name="WAVE">square</field>
																																																									<value name="FREQ">
																																																										<block type="math_number">
																																																											<field name="NUM">174.61</field>
																																																										</block>
																																																									</value>
																																																									<value name="DURATION">
																																																										<block type="math_number">
																																																											<field name="NUM">100</field>
																																																										</block>
																																																									</value>
																																																									<next>
																																																										<block type="sound_play">
																																																											<field name="WAVE">square</field>
																																																											<value name="FREQ">
																																																												<block type="math_number">
																																																													<field name="NUM">440</field>
																																																												</block>
																																																											</value>
																																																											<value name="DURATION">
																																																												<block type="math_number">
																																																													<field name="NUM">100</field>
																																																												</block>
																																																											</value>
																																																											<next>
																																																												<block type="sound_play">
																																																													<field name="WAVE">square</field>
																																																													<value name="FREQ">
																																																														<block type="math_number">
																																																															<field name="NUM">261.63</field>
																																																														</block>
																																																													</value>
																																																													<value name="DURATION">
																																																														<block type="math_number">
																																																															<field name="NUM">100</field>
																																																														</block>
																																																													</value>
																																																												</block>
																																																											</next>
																																																										</block>
																																																									</next>
																																																								</block>
																																																							</statement>
																																																							<next>
																																																								<block type="game_wait_ms">
																																																									<value name="DELAY">
																																																										<block type="math_number">
																																																											<field name="NUM">11800</field>
																																																										</block>
																																																									</value>
																																																									<statement name="DO">
																																																										<block type="sound_play">
																																																											<field name="WAVE">square</field>
																																																											<value name="FREQ">
																																																												<block type="math_number">
																																																													<field name="NUM">196</field>
																																																												</block>
																																																											</value>
																																																											<value name="DURATION">
																																																												<block type="math_number">
																																																													<field name="NUM">100</field>
																																																												</block>
																																																											</value>
																																																											<next>
																																																												<block type="sound_play">
																																																													<field name="WAVE">square</field>
																																																													<value name="FREQ">
																																																														<block type="math_number">
																																																															<field name="NUM">493.88</field>
																																																														</block>
																																																													</value>
																																																													<value name="DURATION">
																																																														<block type="math_number">
																																																															<field name="NUM">100</field>
																																																														</block>
																																																													</value>
																																																													<next>
																																																														<block type="sound_play">
																																																															<field name="WAVE">square</field>
																																																															<value name="FREQ">
																																																																<block type="math_number">
																																																																	<field name="NUM">293.66</field>
																																																																</block>
																																																															</value>
																																																															<value name="DURATION">
																																																																<block type="math_number">
																																																																	<field name="NUM">100</field>
																																																																</block>
																																																															</value>
																																																														</block>
																																																													</next>
																																																												</block>
																																																											</next>
																																																										</block>
																																																									</statement>
																																																									<next>
																																																										<block type="game_wait_ms">
																																																											<value name="DELAY">
																																																												<block type="math_number">
																																																													<field name="NUM">12200</field>
																																																												</block>
																																																											</value>
																																																											<statement name="DO">
																																																												<block type="sound_play">
																																																													<field name="WAVE">square</field>
																																																													<value name="FREQ">
																																																														<block type="math_number">
																																																															<field name="NUM">185</field>
																																																														</block>
																																																													</value>
																																																													<value name="DURATION">
																																																														<block type="math_number">
																																																															<field name="NUM">100</field>
																																																														</block>
																																																													</value>
																																																													<next>
																																																														<block type="sound_play">
																																																															<field name="WAVE">square</field>
																																																															<value name="FREQ">
																																																																<block type="math_number">
																																																																	<field name="NUM">466.16</field>
																																																																</block>
																																																															</value>
																																																															<value name="DURATION">
																																																																<block type="math_number">
																																																																	<field name="NUM">100</field>
																																																																</block>
																																																															</value>
																																																															<next>
																																																																<block type="sound_play">
																																																																	<field name="WAVE">square</field>
																																																																	<value name="FREQ">
																																																																		<block type="math_number">
																																																																			<field name="NUM">277.18</field>
																																																																		</block>
																																																																	</value>
																																																																	<value name="DURATION">
																																																																		<block type="math_number">
																																																																			<field name="NUM">100</field>
																																																																		</block>
																																																																	</value>
																																																																</block>
																																																															</next>
																																																														</block>
																																																													</next>
																																																												</block>
																																																											</statement>
																																																											<next>
																																																												<block type="game_wait_ms">
																																																													<value name="DELAY">
																																																														<block type="math_number">
																																																															<field name="NUM">12400</field>
																																																														</block>
																																																													</value>
																																																													<statement name="DO">
																																																														<block type="sound_play">
																																																															<field name="WAVE">square</field>
																																																															<value name="FREQ">
																																																																<block type="math_number">
																																																																	<field name="NUM">174.61</field>
																																																																</block>
																																																															</value>
																																																															<value name="DURATION">
																																																																<block type="math_number">
																																																																	<field name="NUM">100</field>
																																																																</block>
																																																															</value>
																																																															<next>
																																																																<block type="sound_play">
																																																																	<field name="WAVE">square</field>
																																																																	<value name="FREQ">
																																																																		<block type="math_number">
																																																																			<field name="NUM">440</field>
																																																																		</block>
																																																																	</value>
																																																																	<value name="DURATION">
																																																																		<block type="math_number">
																																																																			<field name="NUM">100</field>
																																																																		</block>
																																																																	</value>
																																																																	<next>
																																																																		<block type="sound_play">
																																																																			<field name="WAVE">square</field>
																																																																			<value name="FREQ">
																																																																				<block type="math_number">
																																																																					<field name="NUM">261.63</field>
																																																																				</block>
																																																																			</value>
																																																																			<value name="DURATION">
																																																																				<block type="math_number">
																																																																					<field name="NUM">100</field>
																																																																				</block>
																																																																			</value>
																																																																		</block>
																																																																	</next>
																																																																</block>
																																																															</next>
																																																														</block>
																																																													</statement>
																																																													<next>
																																																														<block type="game_wait_ms">
																																																															<value name="DELAY">
																																																																<block type="math_number">
																																																																	<field name="NUM">12800</field>
																																																																</block>
																																																															</value>
																																																															<statement name="DO">
																																																																<block type="sound_play">
																																																																	<field name="WAVE">square</field>
																																																																	<value name="FREQ">
																																																																		<block type="math_number">
																																																																			<field name="NUM">164.81</field>
																																																																		</block>
																																																																	</value>
																																																																	<value name="DURATION">
																																																																		<block type="math_number">
																																																																			<field name="NUM">100</field>
																																																																		</block>
																																																																	</value>
																																																																	<next>
																																																																		<block type="sound_play">
																																																																			<field name="WAVE">square</field>
																																																																			<value name="FREQ">
																																																																				<block type="math_number">
																																																																					<field name="NUM">392</field>
																																																																				</block>
																																																																			</value>
																																																																			<value name="DURATION">
																																																																				<block type="math_number">
																																																																					<field name="NUM">100</field>
																																																																				</block>
																																																																			</value>
																																																																			<next>
																																																																				<block type="sound_play">
																																																																					<field name="WAVE">square</field>
																																																																					<value name="FREQ">
																																																																						<block type="math_number">
																																																																							<field name="NUM">261.63</field>
																																																																						</block>
																																																																					</value>
																																																																					<value name="DURATION">
																																																																						<block type="math_number">
																																																																							<field name="NUM">100</field>
																																																																						</block>
																																																																					</value>
																																																																				</block>
																																																																			</next>
																																																																		</block>
																																																																	</next>
																																																																</block>
																																																															</statement>
																																																															<next>
																																																																<block type="game_wait_ms">
																																																																	<value name="DELAY">
																																																																		<block type="math_number">
																																																																			<field name="NUM">13000</field>
																																																																		</block>
																																																																	</value>
																																																																	<statement name="DO">
																																																																		<block type="sound_play">
																																																																			<field name="WAVE">square</field>
																																																																			<value name="FREQ">
																																																																				<block type="math_number">
																																																																					<field name="NUM">261.63</field>
																																																																				</block>
																																																																			</value>
																																																																			<value name="DURATION">
																																																																				<block type="math_number">
																																																																					<field name="NUM">100</field>
																																																																				</block>
																																																																			</value>
																																																																			<next>
																																																																				<block type="sound_play">
																																																																					<field name="WAVE">square</field>
																																																																					<value name="FREQ">
																																																																						<block type="math_number">
																																																																							<field name="NUM">659.26</field>
																																																																						</block>
																																																																					</value>
																																																																					<value name="DURATION">
																																																																						<block type="math_number">
																																																																							<field name="NUM">100</field>
																																																																						</block>
																																																																					</value>
																																																																					<next>
																																																																						<block type="sound_play">
																																																																							<field name="WAVE">square</field>
																																																																							<value name="FREQ">
																																																																								<block type="math_number">
																																																																									<field name="NUM">392</field>
																																																																								</block>
																																																																							</value>
																																																																							<value name="DURATION">
																																																																								<block type="math_number">
																																																																									<field name="NUM">100</field>
																																																																								</block>
																																																																							</value>
																																																																						</block>
																																																																					</next>
																																																																				</block>
																																																																			</next>
																																																																		</block>
																																																																	</statement>
																																																																	<next>
																																																																		<block type="game_wait_ms">
																																																																			<value name="DELAY">
																																																																				<block type="math_number">
																																																																					<field name="NUM">13300</field>
																																																																				</block>
																																																																			</value>
																																																																			<statement name="DO">
																																																																				<block type="sound_play">
																																																																					<field name="WAVE">square</field>
																																																																					<value name="FREQ">
																																																																						<block type="math_number">
																																																																							<field name="NUM">329.63</field>
																																																																						</block>
																																																																					</value>
																																																																					<value name="DURATION">
																																																																						<block type="math_number">
																																																																							<field name="NUM">100</field>
																																																																						</block>
																																																																					</value>
																																																																					<next>
																																																																						<block type="sound_play">
																																																																							<field name="WAVE">square</field>
																																																																							<value name="FREQ">
																																																																								<block type="math_number">
																																																																									<field name="NUM">783.99</field>
																																																																								</block>
																																																																							</value>
																																																																							<value name="DURATION">
																																																																								<block type="math_number">
																																																																									<field name="NUM">100</field>
																																																																								</block>
																																																																							</value>
																																																																							<next>
																																																																								<block type="sound_play">
																																																																									<field name="WAVE">square</field>
																																																																									<value name="FREQ">
																																																																										<block type="math_number">
																																																																											<field name="NUM">493.88</field>
																																																																										</block>
																																																																									</value>
																																																																									<value name="DURATION">
																																																																										<block type="math_number">
																																																																											<field name="NUM">100</field>
																																																																										</block>
																																																																									</value>
																																																																								</block>
																																																																							</next>
																																																																						</block>
																																																																					</next>
																																																																				</block>
																																																																			</statement>
																																																																			<next>
																																																																				<block type="game_wait_ms">
																																																																					<value name="DELAY">
																																																																						<block type="math_number">
																																																																							<field name="NUM">13600</field>
																																																																						</block>
																																																																					</value>
																																																																					<statement name="DO">
																																																																						<block type="sound_play">
																																																																							<field name="WAVE">square</field>
																																																																							<value name="FREQ">
																																																																								<block type="math_number">
																																																																									<field name="NUM">349.23</field>
																																																																								</block>
																																																																							</value>
																																																																							<value name="DURATION">
																																																																								<block type="math_number">
																																																																									<field name="NUM">100</field>
																																																																								</block>
																																																																							</value>
																																																																							<next>
																																																																								<block type="sound_play">
																																																																									<field name="WAVE">square</field>
																																																																									<value name="FREQ">
																																																																										<block type="math_number">
																																																																											<field name="NUM">880</field>
																																																																										</block>
																																																																									</value>
																																																																									<value name="DURATION">
																																																																										<block type="math_number">
																																																																											<field name="NUM">100</field>
																																																																										</block>
																																																																									</value>
																																																																									<next>
																																																																										<block type="sound_play">
																																																																											<field name="WAVE">square</field>
																																																																											<value name="FREQ">
																																																																												<block type="math_number">
																																																																													<field name="NUM">523.25</field>
																																																																												</block>
																																																																											</value>
																																																																											<value name="DURATION">
																																																																												<block type="math_number">
																																																																													<field name="NUM">100</field>
																																																																												</block>
																																																																											</value>
																																																																										</block>
																																																																									</next>
																																																																								</block>
																																																																							</next>
																																																																						</block>
																																																																					</statement>
																																																																					<next>
																																																																						<block type="game_wait_ms">
																																																																							<value name="DELAY">
																																																																								<block type="math_number">
																																																																									<field name="NUM">14000</field>
																																																																								</block>
																																																																							</value>
																																																																							<statement name="DO">
																																																																								<block type="sound_play">
																																																																									<field name="WAVE">square</field>
																																																																									<value name="FREQ">
																																																																										<block type="math_number">
																																																																											<field name="NUM">293.66</field>
																																																																										</block>
																																																																									</value>
																																																																									<value name="DURATION">
																																																																										<block type="math_number">
																																																																											<field name="NUM">100</field>
																																																																										</block>
																																																																									</value>
																																																																									<next>
																																																																										<block type="sound_play">
																																																																											<field name="WAVE">square</field>
																																																																											<value name="FREQ">
																																																																												<block type="math_number">
																																																																													<field name="NUM">698.46</field>
																																																																												</block>
																																																																											</value>
																																																																											<value name="DURATION">
																																																																												<block type="math_number">
																																																																													<field name="NUM">100</field>
																																																																												</block>
																																																																											</value>
																																																																											<next>
																																																																												<block type="sound_play">
																																																																													<field name="WAVE">square</field>
																																																																													<value name="FREQ">
																																																																														<block type="math_number">
																																																																															<field name="NUM">440</field>
																																																																														</block>
																																																																													</value>
																																																																													<value name="DURATION">
																																																																														<block type="math_number">
																																																																															<field name="NUM">100</field>
																																																																														</block>
																																																																													</value>
																																																																												</block>
																																																																											</next>
																																																																										</block>
																																																																									</next>
																																																																								</block>
																																																																							</statement>
																																																																							<next>
																																																																								<block type="game_wait_ms">
																																																																									<value name="DELAY">
																																																																										<block type="math_number">
																																																																											<field name="NUM">14200</field>
																																																																										</block>
																																																																									</value>
																																																																									<statement name="DO">
																																																																										<block type="sound_play">
																																																																											<field name="WAVE">square</field>
																																																																											<value name="FREQ">
																																																																												<block type="math_number">
																																																																													<field name="NUM">329.63</field>
																																																																												</block>
																																																																											</value>
																																																																											<value name="DURATION">
																																																																												<block type="math_number">
																																																																													<field name="NUM">100</field>
																																																																												</block>
																																																																											</value>
																																																																											<next>
																																																																												<block type="sound_play">
																																																																													<field name="WAVE">square</field>
																																																																													<value name="FREQ">
																																																																														<block type="math_number">
																																																																															<field name="NUM">783.99</field>
																																																																														</block>
																																																																													</value>
																																																																													<value name="DURATION">
																																																																														<block type="math_number">
																																																																															<field name="NUM">100</field>
																																																																														</block>
																																																																													</value>
																																																																													<next>
																																																																														<block type="sound_play">
																																																																															<field name="WAVE">square</field>
																																																																															<value name="FREQ">
																																																																																<block type="math_number">
																																																																																	<field name="NUM">493.88</field>
																																																																																</block>
																																																																															</value>
																																																																															<value name="DURATION">
																																																																																<block type="math_number">
																																																																																	<field name="NUM">100</field>
																																																																																</block>
																																																																															</value>
																																																																														</block>
																																																																													</next>
																																																																												</block>
																																																																											</next>
																																																																										</block>
																																																																									</statement>
																																																																									<next>
																																																																										<block type="game_wait_ms">
																																																																											<value name="DELAY">
																																																																												<block type="math_number">
																																																																													<field name="NUM">14600</field>
																																																																												</block>
																																																																											</value>
																																																																											<statement name="DO">
																																																																												<block type="sound_play">
																																																																													<field name="WAVE">square</field>
																																																																													<value name="FREQ">
																																																																														<block type="math_number">
																																																																															<field name="NUM">261.63</field>
																																																																														</block>
																																																																													</value>
																																																																													<value name="DURATION">
																																																																														<block type="math_number">
																																																																															<field name="NUM">100</field>
																																																																														</block>
																																																																													</value>
																																																																													<next>
																																																																														<block type="sound_play">
																																																																															<field name="WAVE">square</field>
																																																																															<value name="FREQ">
																																																																																<block type="math_number">
																																																																																	<field name="NUM">659.26</field>
																																																																																</block>
																																																																															</value>
																																																																															<value name="DURATION">
																																																																																<block type="math_number">
																																																																																	<field name="NUM">100</field>
																																																																																</block>
																																																																															</value>
																																																																															<next>
																																																																																<block type="sound_play">
																																																																																	<field name="WAVE">square</field>
																																																																																	<value name="FREQ">
																																																																																		<block type="math_number">
																																																																																			<field name="NUM">440</field>
																																																																																		</block>
																																																																																	</value>
																																																																																	<value name="DURATION">
																																																																																		<block type="math_number">
																																																																																			<field name="NUM">100</field>
																																																																																		</block>
																																																																																	</value>
																																																																																</block>
																																																																															</next>
																																																																														</block>
																																																																													</next>
																																																																												</block>
																																																																											</statement>
																																																																											<next>
																																																																												<block type="game_wait_ms">
																																																																													<value name="DELAY">
																																																																														<block type="math_number">
																																																																															<field name="NUM">15000</field>
																																																																														</block>
																																																																													</value>
																																																																													<statement name="DO">
																																																																														<block type="sound_play">
																																																																															<field name="WAVE">square</field>
																																																																															<value name="FREQ">
																																																																																<block type="math_number">
																																																																																	<field name="NUM">220</field>
																																																																																</block>
																																																																															</value>
																																																																															<value name="DURATION">
																																																																																<block type="math_number">
																																																																																	<field name="NUM">100</field>
																																																																																</block>
																																																																															</value>
																																																																															<next>
																																																																																<block type="sound_play">
																																																																																	<field name="WAVE">square</field>
																																																																																	<value name="FREQ">
																																																																																		<block type="math_number">
																																																																																			<field name="NUM">523.25</field>
																																																																																		</block>
																																																																																	</value>
																																																																																	<value name="DURATION">
																																																																																		<block type="math_number">
																																																																																			<field name="NUM">100</field>
																																																																																		</block>
																																																																																	</value>
																																																																																	<next>
																																																																																		<block type="sound_play">
																																																																																			<field name="WAVE">square</field>
																																																																																			<value name="FREQ">
																																																																																				<block type="math_number">
																																																																																					<field name="NUM">329.63</field>
																																																																																				</block>
																																																																																			</value>
																																																																																			<value name="DURATION">
																																																																																				<block type="math_number">
																																																																																					<field name="NUM">100</field>
																																																																																				</block>
																																																																																			</value>
																																																																																		</block>
																																																																																	</next>
																																																																																</block>
																																																																															</next>
																																																																														</block>
																																																																													</statement>
																																																																													<next>
																																																																														<block type="game_wait_ms">
																																																																															<value name="DELAY">
																																																																																<block type="math_number">
																																																																																	<field name="NUM">15200</field>
																																																																																</block>
																																																																															</value>
																																																																															<statement name="DO">
																																																																																<block type="sound_play">
																																																																																	<field name="WAVE">square</field>
																																																																																	<value name="FREQ">
																																																																																		<block type="math_number">
																																																																																			<field name="NUM">246.94</field>
																																																																																		</block>
																																																																																	</value>
																																																																																	<value name="DURATION">
																																																																																		<block type="math_number">
																																																																																			<field name="NUM">100</field>
																																																																																		</block>
																																																																																	</value>
																																																																																	<next>
																																																																																		<block type="sound_play">
																																																																																			<field name="WAVE">square</field>
																																																																																			<value name="FREQ">
																																																																																				<block type="math_number">
																																																																																					<field name="NUM">587.33</field>
																																																																																				</block>
																																																																																			</value>
																																																																																			<value name="DURATION">
																																																																																				<block type="math_number">
																																																																																					<field name="NUM">100</field>
																																																																																				</block>
																																																																																			</value>
																																																																																			<next>
																																																																																				<block type="sound_play">
																																																																																					<field name="WAVE">square</field>
																																																																																					<value name="FREQ">
																																																																																						<block type="math_number">
																																																																																							<field name="NUM">349.23</field>
																																																																																						</block>
																																																																																					</value>
																																																																																					<value name="DURATION">
																																																																																						<block type="math_number">
																																																																																							<field name="NUM">100</field>
																																																																																						</block>
																																																																																					</value>
																																																																																				</block>
																																																																																			</next>
																																																																																		</block>
																																																																																	</next>
																																																																																</block>
																																																																															</statement>
																																																																															<next>
																																																																																<block type="game_wait_ms">
																																																																																	<value name="DELAY">
																																																																																		<block type="math_number">
																																																																																			<field name="NUM">15400</field>
																																																																																		</block>
																																																																																	</value>
																																																																																	<statement name="DO">
																																																																																		<block type="sound_play">
																																																																																			<field name="WAVE">square</field>
																																																																																			<value name="FREQ">
																																																																																				<block type="math_number">
																																																																																					<field name="NUM">196</field>
																																																																																				</block>
																																																																																			</value>
																																																																																			<value name="DURATION">
																																																																																				<block type="math_number">
																																																																																					<field name="NUM">100</field>
																																																																																				</block>
																																																																																			</value>
																																																																																			<next>
																																																																																				<block type="sound_play">
																																																																																					<field name="WAVE">square</field>
																																																																																					<value name="FREQ">
																																																																																						<block type="math_number">
																																																																																							<field name="NUM">493.88</field>
																																																																																						</block>
																																																																																					</value>
																																																																																					<value name="DURATION">
																																																																																						<block type="math_number">
																																																																																							<field name="NUM">100</field>
																																																																																						</block>
																																																																																					</value>
																																																																																					<next>
																																																																																						<block type="sound_play">
																																																																																							<field name="WAVE">square</field>
																																																																																							<value name="FREQ">
																																																																																								<block type="math_number">
																																																																																									<field name="NUM">293.66</field>
																																																																																								</block>
																																																																																							</value>
																																																																																							<value name="DURATION">
																																																																																								<block type="math_number">
																																																																																									<field name="NUM">100</field>
																																																																																								</block>
																																																																																							</value>
																																																																																						</block>
																																																																																					</next>
																																																																																				</block>
																																																																																			</next>
																																																																																		</block>
																																																																																	</statement>
																																																																																	<next>
																																																																																		<block type="game_wait_ms">
																																																																																			<value name="DELAY">
																																																																																				<block type="math_number">
																																																																																					<field name="NUM">16000</field>
																																																																																				</block>
																																																																																			</value>
																																																																																			<statement name="DO">
																																																																																				<block type="sound_play">
																																																																																					<field name="WAVE">square</field>
																																																																																					<value name="FREQ">
																																																																																						<block type="math_number">
																																																																																							<field name="NUM">130.81</field>
																																																																																						</block>
																																																																																					</value>
																																																																																					<value name="DURATION">
																																																																																						<block type="math_number">
																																																																																							<field name="NUM">100</field>
																																																																																						</block>
																																																																																					</value>
																																																																																				</block>
																																																																																			</statement>
																																																																																			<next>
																																																																																				<block type="game_wait_ms">
																																																																																					<value name="DELAY">
																																																																																						<block type="math_number">
																																																																																							<field name="NUM">16400</field>
																																																																																						</block>
																																																																																					</value>
																																																																																					<statement name="DO">
																																																																																						<block type="sound_play">
																																																																																							<field name="WAVE">square</field>
																																																																																							<value name="FREQ">
																																																																																								<block type="math_number">
																																																																																									<field name="NUM">783.99</field>
																																																																																								</block>
																																																																																							</value>
																																																																																							<value name="DURATION">
																																																																																								<block type="math_number">
																																																																																									<field name="NUM">100</field>
																																																																																								</block>
																																																																																							</value>
																																																																																							<next>
																																																																																								<block type="sound_play">
																																																																																									<field name="WAVE">square</field>
																																																																																									<value name="FREQ">
																																																																																										<block type="math_number">
																																																																																											<field name="NUM">659.26</field>
																																																																																										</block>
																																																																																									</value>
																																																																																									<value name="DURATION">
																																																																																										<block type="math_number">
																																																																																											<field name="NUM">100</field>
																																																																																										</block>
																																																																																									</value>
																																																																																								</block>
																																																																																							</next>
																																																																																						</block>
																																																																																					</statement>
																																																																																					<next>
																																																																																						<block type="game_wait_ms">
																																																																																							<value name="DELAY">
																																																																																								<block type="math_number">
																																																																																									<field name="NUM">16600</field>
																																																																																								</block>
																																																																																							</value>
																																																																																							<statement name="DO">
																																																																																								<block type="sound_play">
																																																																																									<field name="WAVE">square</field>
																																																																																									<value name="FREQ">
																																																																																										<block type="math_number">
																																																																																											<field name="NUM">196</field>
																																																																																										</block>
																																																																																									</value>
																																																																																									<value name="DURATION">
																																																																																										<block type="math_number">
																																																																																											<field name="NUM">100</field>
																																																																																										</block>
																																																																																									</value>
																																																																																									<next>
																																																																																										<block type="sound_play">
																																																																																											<field name="WAVE">square</field>
																																																																																											<value name="FREQ">
																																																																																												<block type="math_number">
																																																																																													<field name="NUM">739.99</field>
																																																																																												</block>
																																																																																											</value>
																																																																																											<value name="DURATION">
																																																																																												<block type="math_number">
																																																																																													<field name="NUM">100</field>
																																																																																												</block>
																																																																																											</value>
																																																																																											<next>
																																																																																												<block type="sound_play">
																																																																																													<field name="WAVE">square</field>
																																																																																													<value name="FREQ">
																																																																																														<block type="math_number">
																																																																																															<field name="NUM">622.25</field>
																																																																																														</block>
																																																																																													</value>
																																																																																													<value name="DURATION">
																																																																																														<block type="math_number">
																																																																																															<field name="NUM">100</field>
																																																																																														</block>
																																																																																													</value>
																																																																																												</block>
																																																																																											</next>
																																																																																										</block>
																																																																																									</next>
																																																																																								</block>
																																																																																							</statement>
																																																																																							<next>
																																																																																								<block type="game_wait_ms">
																																																																																									<value name="DELAY">
																																																																																										<block type="math_number">
																																																																																											<field name="NUM">16800</field>
																																																																																										</block>
																																																																																									</value>
																																																																																									<statement name="DO">
																																																																																										<block type="sound_play">
																																																																																											<field name="WAVE">square</field>
																																																																																											<value name="FREQ">
																																																																																												<block type="math_number">
																																																																																													<field name="NUM">698.46</field>
																																																																																												</block>
																																																																																											</value>
																																																																																											<value name="DURATION">
																																																																																												<block type="math_number">
																																																																																													<field name="NUM">100</field>
																																																																																												</block>
																																																																																											</value>
																																																																																											<next>
																																																																																												<block type="sound_play">
																																																																																													<field name="WAVE">square</field>
																																																																																													<value name="FREQ">
																																																																																														<block type="math_number">
																																																																																															<field name="NUM">587.33</field>
																																																																																														</block>
																																																																																													</value>
																																																																																													<value name="DURATION">
																																																																																														<block type="math_number">
																																																																																															<field name="NUM">100</field>
																																																																																														</block>
																																																																																													</value>
																																																																																												</block>
																																																																																											</next>
																																																																																										</block>
																																																																																									</statement>
																																																																																									<next>
																																																																																										<block type="game_wait_ms">
																																																																																											<value name="DELAY">
																																																																																												<block type="math_number">
																																																																																													<field name="NUM">17000</field>
																																																																																												</block>
																																																																																											</value>
																																																																																											<statement name="DO">
																																																																																												<block type="sound_play">
																																																																																													<field name="WAVE">square</field>
																																																																																													<value name="FREQ">
																																																																																														<block type="math_number">
																																																																																															<field name="NUM">622.25</field>
																																																																																														</block>
																																																																																													</value>
																																																																																													<value name="DURATION">
																																																																																														<block type="math_number">
																																																																																															<field name="NUM">100</field>
																																																																																														</block>
																																																																																													</value>
																																																																																													<next>
																																																																																														<block type="sound_play">
																																																																																															<field name="WAVE">square</field>
																																																																																															<value name="FREQ">
																																																																																																<block type="math_number">
																																																																																																	<field name="NUM">493.88</field>
																																																																																																</block>
																																																																																															</value>
																																																																																															<value name="DURATION">
																																																																																																<block type="math_number">
																																																																																																	<field name="NUM">100</field>
																																																																																																</block>
																																																																																															</value>
																																																																																														</block>
																																																																																													</next>
																																																																																												</block>
																																																																																											</statement>
																																																																																											<next>
																																																																																												<block type="game_wait_ms">
																																																																																													<value name="DELAY">
																																																																																														<block type="math_number">
																																																																																															<field name="NUM">17200</field>
																																																																																														</block>
																																																																																													</value>
																																																																																													<statement name="DO">
																																																																																														<block type="sound_play">
																																																																																															<field name="WAVE">square</field>
																																																																																															<value name="FREQ">
																																																																																																<block type="math_number">
																																																																																																	<field name="NUM">261.63</field>
																																																																																																</block>
																																																																																															</value>
																																																																																															<value name="DURATION">
																																																																																																<block type="math_number">
																																																																																																	<field name="NUM">100</field>
																																																																																																</block>
																																																																																															</value>
																																																																																														</block>
																																																																																													</statement>
																																																																																													<next>
																																																																																														<block type="game_wait_ms">
																																																																																															<value name="DELAY">
																																																																																																<block type="math_number">
																																																																																																	<field name="NUM">17400</field>
																																																																																																</block>
																																																																																															</value>
																																																																																															<statement name="DO">
																																																																																																<block type="sound_play">
																																																																																																	<field name="WAVE">square</field>
																																																																																																	<value name="FREQ">
																																																																																																		<block type="math_number">
																																																																																																			<field name="NUM">659.26</field>
																																																																																																		</block>
																																																																																																	</value>
																																																																																																	<value name="DURATION">
																																																																																																		<block type="math_number">
																																																																																																			<field name="NUM">100</field>
																																																																																																		</block>
																																																																																																	</value>
																																																																																																	<next>
																																																																																																		<block type="sound_play">
																																																																																																			<field name="WAVE">square</field>
																																																																																																			<value name="FREQ">
																																																																																																				<block type="math_number">undefined<field name="NUM">523.25</field>
																																																																																																				</block>
																																																																																																			</value>
																																																																																																			<value name="DURATION">
																																																																																																				<block type="math_number">undefined<field name="NUM">100</field>
																																																																																																				</block>
																																																																																																			</value>
																																																																																																		</block>
																																																																																																	</next>
																																																																																																</block>
																																																																																															</statement>
																																																																																															<next>
																																																																																																<block type="game_wait_ms">
																																																																																																	<value name="DELAY">
																																																																																																		<block type="math_number">
																																																																																																			<field name="NUM">17600</field>
																																																																																																		</block>
																																																																																																	</value>
																																																																																																	<statement name="DO">
																																																																																																		<block type="sound_play">
																																																																																																			<field name="WAVE">square</field>
																																																																																																			<value name="FREQ">
																																																																																																				<block type="math_number">undefined<field name="NUM">174.61</field>
																																																																																																				</block>
																																																																																																			</value>
																																																																																																			<value name="DURATION">
																																																																																																				<block type="math_number">undefined<field name="NUM">100</field>
																																																																																																				</block>
																																																																																																			</value>
																																																																																																		</block>
																																																																																																	</statement>
																																																																																																	<next>
																																																																																																		<block type="game_wait_ms">
																																																																																																			<value name="DELAY">
																																																																																																				<block type="math_number">undefined<field name="NUM">17800</field>
																																																																																																				</block>
																																																																																																			</value>
																																																																																																			<statement name="DO">
																																																																																																				<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">415.3</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined<next>undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">329.63</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined</block>undefined</next>
																																																																																																				</block>
																																																																																																			</statement>
																																																																																																			<next>
																																																																																																				<block type="game_wait_ms">undefined<value name="DELAY">undefined<block type="math_number">undefined<field name="NUM">18000</field>undefined</block>undefined</value>undefined<statement name="DO">undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">440</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined<next>undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">349.23</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined</block>undefined</next>undefined</block>undefined</statement>undefined<next>undefined<block type="game_wait_ms">undefined<value name="DELAY">undefined<block type="math_number">undefined<field name="NUM">18200</field>undefined</block>undefined</value>undefined<statement name="DO">undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">261.63</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined<next>undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">523.25</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined<next>undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">392</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</statement>undefined<next>undefined<block type="game_wait_ms">undefined<value name="DELAY">undefined<block type="math_number">undefined<field name="NUM">18400</field>undefined</block>undefined</value>undefined<statement name="DO">undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">261.63</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined</block>undefined</statement>undefined<next>undefined<block type="game_wait_ms">undefined<value name="DELAY">undefined<block type="math_number">undefined<field name="NUM">18600</field>undefined</block>undefined</value>undefined<statement name="DO">undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">440</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined<next>undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">261.63</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined</block>undefined</next>undefined</block>undefined</statement>undefined<next>undefined<block type="game_wait_ms">undefined<value name="DELAY">undefined<block type="math_number">undefined<field name="NUM">18800</field>undefined</block>undefined</value>undefined<statement name="DO">undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">174.61</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined<next>undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">523.25</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined<next>undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">329.63</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</statement>undefined<next>undefined<block type="game_wait_ms">undefined<value name="DELAY">undefined<block type="math_number">undefined<field name="NUM">19000</field>undefined</block>undefined</value>undefined<statement name="DO">undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">587.33</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined<next>undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">349.23</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined</block>undefined</next>undefined</block>undefined</statement>undefined<next>undefined<block type="game_wait_ms">undefined<value name="DELAY">undefined<block type="math_number">undefined<field name="NUM">19200</field>undefined</block>undefined</value>undefined<statement name="DO">undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">130.81</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined</block>undefined</statement>undefined<next>undefined<block type="game_wait_ms">undefined<value name="DELAY">undefined<block type="math_number">undefined<field name="NUM">19600</field>undefined</block>undefined</value>undefined<statement name="DO">undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">783.99</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined<next>undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">659.26</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined</block>undefined</next>undefined</block>undefined</statement>undefined<next>undefined<block type="game_wait_ms">undefined<value name="DELAY">undefined<block type="math_number">undefined<field name="NUM">19800</field>undefined</block>undefined</value>undefined<statement name="DO">undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">164.81</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined<next>undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">739.99</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined<next>undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">622.25</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</statement>undefined<next>undefined<block type="game_wait_ms">undefined<value name="DELAY">undefined<block type="math_number">undefined<field name="NUM">20000</field>undefined</block>undefined</value>undefined<statement name="DO">undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">698.46</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined<next>undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">587.33</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined</block>undefined</next>undefined</block>undefined</statement>undefined<next>undefined<block type="game_wait_ms">undefined<value name="DELAY">undefined<block type="math_number">undefined<field name="NUM">20200</field>undefined</block>undefined</value>undefined<statement name="DO">undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">622.25</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined<next>undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">493.88</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined</block>undefined</next>undefined</block>undefined</statement>undefined<next>undefined<block type="game_wait_ms">undefined<value name="DELAY">undefined<block type="math_number">undefined<field name="NUM">20400</field>undefined</block>undefined</value>undefined<statement name="DO">undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">196</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined</block>undefined</statement>undefined<next>undefined<block type="game_wait_ms">undefined<value name="DELAY">undefined<block type="math_number">undefined<field name="NUM">20600</field>undefined</block>undefined</value>undefined<statement name="DO">undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">261.63</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined<next>undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">659.26</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined<next>undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">523.25</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</statement>undefined<next>undefined<block type="game_wait_ms">undefined<value name="DELAY">undefined<block type="math_number">undefined<field name="NUM">21000</field>undefined</block>undefined</value>undefined<statement name="DO">undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">1046.5</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined<next>undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">783.99</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined<next>undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">698.46</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</statement>undefined<next>undefined<block type="game_wait_ms">undefined<value name="DELAY">undefined<block type="math_number">undefined<field name="NUM">21400</field>undefined</block>undefined</value>undefined<statement name="DO">undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">1046.5</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined<next>undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">783.99</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined<next>undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">698.46</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</statement>undefined<next>undefined<block type="game_wait_ms">undefined<value name="DELAY">undefined<block type="math_number">undefined<field name="NUM">21600</field>undefined</block>undefined</value>undefined<statement name="DO">undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">1046.5</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined<next>undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">783.99</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined<next>undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">698.46</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</statement>undefined<next>undefined<block type="game_wait_ms">undefined<value name="DELAY">undefined<block type="math_number">undefined<field name="NUM">22000</field>undefined</block>undefined</value>undefined<statement name="DO">undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">196</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined</block>undefined</statement>undefined<next>undefined<block type="game_wait_ms">undefined<value name="DELAY">undefined<block type="math_number">undefined<field name="NUM">22400</field>undefined</block>undefined</value>undefined<statement name="DO">undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">130.81</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined</block>undefined</statement>undefined<next>undefined<block type="game_wait_ms">undefined<value name="DELAY">undefined<block type="math_number">undefined<field name="NUM">22800</field>undefined</block>undefined</value>undefined<statement name="DO">undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">783.99</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined<next>undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">659.26</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined</block>undefined</next>undefined</block>undefined</statement>undefined<next>undefined<block type="game_wait_ms">undefined<value name="DELAY">undefined<block type="math_number">undefined<field name="NUM">23000</field>undefined</block>undefined</value>undefined<statement name="DO">undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">196</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined<next>undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">739.99</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined<next>undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">622.25</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</statement>undefined<next>undefined<block type="game_wait_ms">undefined<value name="DELAY">undefined<block type="math_number">undefined<field name="NUM">23200</field>undefined</block>undefined</value>undefined<statement name="DO">undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">698.46</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined<next>undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">587.33</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined</block>undefined</next>undefined</block>undefined</statement>undefined<next>undefined<block type="game_wait_ms">undefined<value name="DELAY">undefined<block type="math_number">undefined<field name="NUM">23400</field>undefined</block>undefined</value>undefined<statement name="DO">undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">622.25</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined<next>undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">493.88</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined</block>undefined</next>undefined</block>undefined</statement>undefined<next>undefined<block type="game_wait_ms">undefined<value name="DELAY">undefined<block type="math_number">undefined<field name="NUM">23600</field>undefined</block>undefined</value>undefined<statement name="DO">undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">261.63</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined</block>undefined</statement>undefined<next>undefined<block type="game_wait_ms">undefined<value name="DELAY">undefined<block type="math_number">undefined<field name="NUM">23800</field>undefined</block>undefined</value>undefined<statement name="DO">undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">659.26</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined<next>undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">523.25</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined</block>undefined</next>undefined</block>undefined</statement>undefined<next>undefined<block type="game_wait_ms">undefined<value name="DELAY">undefined<block type="math_number">undefined<field name="NUM">24000</field>undefined</block>undefined</value>undefined<statement name="DO">undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">174.61</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined</block>undefined</statement>undefined<next>undefined<block type="game_wait_ms">undefined<value name="DELAY">undefined<block type="math_number">undefined<field name="NUM">24200</field>undefined</block>undefined</value>undefined<statement name="DO">undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">415.3</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined<next>undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">329.63</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined</block>undefined</next>undefined</block>undefined</statement>undefined<next>undefined<block type="game_wait_ms">undefined<value name="DELAY">undefined<block type="math_number">undefined<field name="NUM">24400</field>undefined</block>undefined</value>undefined<statement name="DO">undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">440</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined<next>undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">349.23</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined</block>undefined</next>undefined</block>undefined</statement>undefined<next>undefined<block type="game_wait_ms">undefined<value name="DELAY">undefined<block type="math_number">undefined<field name="NUM">24600</field>undefined</block>undefined</value>undefined<statement name="DO">undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">261.63</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined<next>undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">523.25</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined<next>undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">392</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</statement>undefined<next>undefined<block type="game_wait_ms">undefined<value name="DELAY">undefined<block type="math_number">undefined<field name="NUM">24800</field>undefined</block>undefined</value>undefined<statement name="DO">undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">261.63</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined</block>undefined</statement>undefined<next>undefined<block type="game_wait_ms">undefined<value name="DELAY">undefined<block type="math_number">undefined<field name="NUM">25000</field>undefined</block>undefined</value>undefined<statement name="DO">undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">440</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined<next>undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">261.63</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined</block>undefined</next>undefined</block>undefined</statement>undefined<next>undefined<block type="game_wait_ms">undefined<value name="DELAY">undefined<block type="math_number">undefined<field name="NUM">25200</field>undefined</block>undefined</value>undefined<statement name="DO">undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">174.61</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined<next>undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">523.25</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined<next>undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">329.63</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</statement>undefined<next>undefined<block type="game_wait_ms">undefined<value name="DELAY">undefined<block type="math_number">undefined<field name="NUM">25400</field>undefined</block>undefined</value>undefined<statement name="DO">undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">587.33</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined<next>undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">349.23</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined</block>undefined</next>undefined</block>undefined</statement>undefined<next>undefined<block type="game_wait_ms">undefined<value name="DELAY">undefined<block type="math_number">undefined<field name="NUM">25600</field>undefined</block>undefined</value>undefined<statement name="DO">undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">130.81</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined</block>undefined</statement>undefined<next>undefined<block type="game_wait_ms">undefined<value name="DELAY">undefined<block type="math_number">undefined<field name="NUM">26000</field>undefined</block>undefined</value>undefined<statement name="DO">undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">207.65</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined<next>undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">622.25</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined<next>undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">415.3</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</statement>undefined<next>undefined<block type="game_wait_ms">undefined<value name="DELAY">undefined<block type="math_number">undefined<field name="NUM">26600</field>undefined</block>undefined</value>undefined<statement name="DO">undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">233.08</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined<next>undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">587.33</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined<next>undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">349.23</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</statement>undefined<next>undefined<block type="game_wait_ms">undefined<value name="DELAY">undefined<block type="math_number">undefined<field name="NUM">27200</field>undefined</block>undefined</value>undefined<statement name="DO">undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">523.25</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined<next>undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">329.63</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined<next>undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">261.63</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</statement>undefined<next>undefined<block type="game_wait_ms">undefined<value name="DELAY">undefined<block type="math_number">undefined<field name="NUM">27800</field>undefined</block>undefined</value>undefined<statement name="DO">undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">196</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined</block>undefined</statement>undefined<next>undefined<block type="game_wait_ms">undefined<value name="DELAY">undefined<block type="math_number">undefined<field name="NUM">28000</field>undefined</block>undefined</value>undefined<statement name="DO">undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">196</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined</block>undefined</statement>undefined<next>undefined<block type="game_wait_ms">undefined<value name="DELAY">undefined<block type="math_number">undefined<field name="NUM">28400</field>undefined</block>undefined</value>undefined<statement name="DO">undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">130.81</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined</block>undefined</statement>undefined<next>undefined<block type="game_wait_ms">undefined<value name="DELAY">undefined<block type="math_number">undefined<field name="NUM">28800</field>undefined</block>undefined</value>undefined<statement name="DO">undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">130.81</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined</block>undefined</statement>undefined<next>undefined<block type="game_wait_ms">undefined<value name="DELAY">undefined<block type="math_number">undefined<field name="NUM">29200</field>undefined</block>undefined</value>undefined<statement name="DO">undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">783.99</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined<next>undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">659.26</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined</block>undefined</next>undefined</block>undefined</statement>undefined<next>undefined<block type="game_wait_ms">undefined<value name="DELAY">undefined<block type="math_number">undefined<field name="NUM">29400</field>undefined</block>undefined</value>undefined<statement name="DO">undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">196</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined<next>undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">739.99</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined<next>undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">622.25</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</statement>undefined<next>undefined<block type="game_wait_ms">undefined<value name="DELAY">undefined<block type="math_number">undefined<field name="NUM">29600</field>undefined</block>undefined</value>undefined<statement name="DO">undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">698.46</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined<next>undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">587.33</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined</block>undefined</next>undefined</block>undefined</statement>undefined<next>undefined<block type="game_wait_ms">undefined<value name="DELAY">undefined<block type="math_number">undefined<field name="NUM">29800</field>undefined</block>undefined</value>undefined<statement name="DO">undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">622.25</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined<next>undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">493.88</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined</block>undefined</next>undefined</block>undefined</statement>undefined<next>undefined<block type="game_wait_ms">undefined<value name="DELAY">undefined<block type="math_number">undefined<field name="NUM">30000</field>undefined</block>undefined</value>undefined<statement name="DO">undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">261.63</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined</block>undefined</statement>undefined<next>undefined<block type="game_wait_ms">undefined<value name="DELAY">undefined<block type="math_number">undefined<field name="NUM">30200</field>undefined</block>undefined</value>undefined<statement name="DO">undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">659.26</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined<next>undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">523.25</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined</block>undefined</next>undefined</block>undefined</statement>undefined<next>undefined<block type="game_wait_ms">undefined<value name="DELAY">undefined<block type="math_number">undefined<field name="NUM">30400</field>undefined</block>undefined</value>undefined<statement name="DO">undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">174.61</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined</block>undefined</statement>undefined<next>undefined<block type="game_wait_ms">undefined<value name="DELAY">undefined<block type="math_number">undefined<field name="NUM">30600</field>undefined</block>undefined</value>undefined<statement name="DO">undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">415.3</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined<next>undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">329.63</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined</block>undefined</next>undefined</block>undefined</statement>undefined<next>undefined<block type="game_wait_ms">undefined<value name="DELAY">undefined<block type="math_number">undefined<field name="NUM">30800</field>undefined</block>undefined</value>undefined<statement name="DO">undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">440</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined<next>undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">349.23</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined</block>undefined</next>undefined</block>undefined</statement>undefined<next>undefined<block type="game_wait_ms">undefined<value name="DELAY">undefined<block type="math_number">undefined<field name="NUM">31000</field>undefined</block>undefined</value>undefined<statement name="DO">undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">261.63</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined<next>undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">523.25</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined<next>undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">392</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</statement>undefined<next>undefined<block type="game_wait_ms">undefined<value name="DELAY">undefined<block type="math_number">undefined<field name="NUM">31200</field>undefined</block>undefined</value>undefined<statement name="DO">undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">261.63</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined</block>undefined</statement>undefined<next>undefined<block type="game_wait_ms">undefined<value name="DELAY">undefined<block type="math_number">undefined<field name="NUM">31400</field>undefined</block>undefined</value>undefined<statement name="DO">undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">440</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined<next>undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">261.63</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined</block>undefined</next>undefined</block>undefined</statement>undefined<next>undefined<block type="game_wait_ms">undefined<value name="DELAY">undefined<block type="math_number">undefined<field name="NUM">31600</field>undefined</block>undefined</value>undefined<statement name="DO">undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">174.61</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined<next>undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">523.25</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined<next>undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">329.63</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</statement>undefined<next>undefined<block type="game_wait_ms">undefined<value name="DELAY">undefined<block type="math_number">undefined<field name="NUM">31800</field>undefined</block>undefined</value>undefined<statement name="DO">undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">587.33</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined<next>undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">349.23</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined</block>undefined</next>undefined</block>undefined</statement>undefined<next>undefined<block type="game_wait_ms">undefined<value name="DELAY">undefined<block type="math_number">undefined<field name="NUM">32000</field>undefined</block>undefined</value>undefined<statement name="DO">undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">130.81</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined</block>undefined</statement>undefined<next>undefined<block type="game_wait_ms">undefined<value name="DELAY">undefined<block type="math_number">undefined<field name="NUM">32400</field>undefined</block>undefined</value>undefined<statement name="DO">undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">783.99</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined<next>undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">659.26</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined</block>undefined</next>undefined</block>undefined</statement>undefined<next>undefined<block type="game_wait_ms">undefined<value name="DELAY">undefined<block type="math_number">undefined<field name="NUM">32600</field>undefined</block>undefined</value>undefined<statement name="DO">undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">164.81</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined<next>undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">739.99</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined<next>undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">622.25</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</statement>undefined<next>undefined<block type="game_wait_ms">undefined<value name="DELAY">undefined<block type="math_number">undefined<field name="NUM">32800</field>undefined</block>undefined</value>undefined<statement name="DO">undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">698.46</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined<next>undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">587.33</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined</block>undefined</next>undefined</block>undefined</statement>undefined<next>undefined<block type="game_wait_ms">undefined<value name="DELAY">undefined<block type="math_number">undefined<field name="NUM">33000</field>undefined</block>undefined</value>undefined<statement name="DO">undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">622.25</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined<next>undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">493.88</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined</block>undefined</next>undefined</block>undefined</statement>undefined<next>undefined<block type="game_wait_ms">undefined<value name="DELAY">undefined<block type="math_number">undefined<field name="NUM">33200</field>undefined</block>undefined</value>undefined<statement name="DO">undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">196</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined</block>undefined</statement>undefined<next>undefined<block type="game_wait_ms">undefined<value name="DELAY">undefined<block type="math_number">undefined<field name="NUM">33400</field>undefined</block>undefined</value>undefined<statement name="DO">undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">261.63</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined<next>undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">659.26</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined<next>undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">523.25</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</statement>undefined<next>undefined<block type="game_wait_ms">undefined<value name="DELAY">undefined<block type="math_number">undefined<field name="NUM">33800</field>undefined</block>undefined</value>undefined<statement name="DO">undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">1046.5</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined<next>undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">783.99</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined<next>undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">698.46</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</statement>undefined<next>undefined<block type="game_wait_ms">undefined<value name="DELAY">undefined<block type="math_number">undefined<field name="NUM">34200</field>undefined</block>undefined</value>undefined<statement name="DO">undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">1046.5</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined<next>undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">783.99</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined<next>undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">698.46</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</statement>undefined<next>undefined<block type="game_wait_ms">undefined<value name="DELAY">undefined<block type="math_number">undefined<field name="NUM">34400</field>undefined</block>undefined</value>undefined<statement name="DO">undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">1046.5</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined<next>undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">783.99</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined<next>undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">698.46</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</statement>undefined<next>undefined<block type="game_wait_ms">undefined<value name="DELAY">undefined<block type="math_number">undefined<field name="NUM">34800</field>undefined</block>undefined</value>undefined<statement name="DO">undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">196</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined</block>undefined</statement>undefined<next>undefined<block type="game_wait_ms">undefined<value name="DELAY">undefined<block type="math_number">undefined<field name="NUM">35200</field>undefined</block>undefined</value>undefined<statement name="DO">undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">130.81</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined</block>undefined</statement>undefined<next>undefined<block type="game_wait_ms">undefined<value name="DELAY">undefined<block type="math_number">undefined<field name="NUM">35600</field>undefined</block>undefined</value>undefined<statement name="DO">undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">783.99</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined<next>undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">659.26</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined</block>undefined</next>undefined</block>undefined</statement>undefined<next>undefined<block type="game_wait_ms">undefined<value name="DELAY">undefined<block type="math_number">undefined<field name="NUM">35800</field>undefined</block>undefined</value>undefined<statement name="DO">undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">196</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined<next>undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">739.99</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined<next>undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">622.25</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</statement>undefined<next>undefined<block type="game_wait_ms">undefined<value name="DELAY">undefined<block type="math_number">undefined<field name="NUM">36000</field>undefined</block>undefined</value>undefined<statement name="DO">undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">698.46</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined<next>undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">587.33</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined</block>undefined</next>undefined</block>undefined</statement>undefined<next>undefined<block type="game_wait_ms">undefined<value name="DELAY">undefined<block type="math_number">undefined<field name="NUM">36200</field>undefined</block>undefined</value>undefined<statement name="DO">undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">622.25</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined<next>undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">493.88</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined</block>undefined</next>undefined</block>undefined</statement>undefined<next>undefined<block type="game_wait_ms">undefined<value name="DELAY">undefined<block type="math_number">undefined<field name="NUM">36400</field>undefined</block>undefined</value>undefined<statement name="DO">undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">261.63</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined</block>undefined</statement>undefined<next>undefined<block type="game_wait_ms">undefined<value name="DELAY">undefined<block type="math_number">undefined<field name="NUM">36600</field>undefined</block>undefined</value>undefined<statement name="DO">undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">659.26</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined<next>undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">523.25</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined</block>undefined</next>undefined</block>undefined</statement>undefined<next>undefined<block type="game_wait_ms">undefined<value name="DELAY">undefined<block type="math_number">undefined<field name="NUM">36800</field>undefined</block>undefined</value>undefined<statement name="DO">undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">174.61</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined</block>undefined</statement>undefined<next>undefined<block type="game_wait_ms">undefined<value name="DELAY">undefined<block type="math_number">undefined<field name="NUM">37000</field>undefined</block>undefined</value>undefined<statement name="DO">undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">415.3</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined<next>undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">329.63</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined</block>undefined</next>undefined</block>undefined</statement>undefined<next>undefined<block type="game_wait_ms">undefined<value name="DELAY">undefined<block type="math_number">undefined<field name="NUM">37200</field>undefined</block>undefined</value>undefined<statement name="DO">undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">440</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined<next>undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">349.23</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined</block>undefined</next>undefined</block>undefined</statement>undefined<next>undefined<block type="game_wait_ms">undefined<value name="DELAY">undefined<block type="math_number">undefined<field name="NUM">37400</field>undefined</block>undefined</value>undefined<statement name="DO">undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">261.63</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined<next>undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">523.25</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined<next>undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">392</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</statement>undefined<next>undefined<block type="game_wait_ms">undefined<value name="DELAY">undefined<block type="math_number">undefined<field name="NUM">37600</field>undefined</block>undefined</value>undefined<statement name="DO">undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">261.63</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined</block>undefined</statement>undefined<next>undefined<block type="game_wait_ms">undefined<value name="DELAY">undefined<block type="math_number">undefined<field name="NUM">37800</field>undefined</block>undefined</value>undefined<statement name="DO">undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">440</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined<next>undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">261.63</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined</block>undefined</next>undefined</block>undefined</statement>undefined<next>undefined<block type="game_wait_ms">undefined<value name="DELAY">undefined<block type="math_number">undefined<field name="NUM">38000</field>undefined</block>undefined</value>undefined<statement name="DO">undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">174.61</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined<next>undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">523.25</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined<next>undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">329.63</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</statement>undefined<next>undefined<block type="game_wait_ms">undefined<value name="DELAY">undefined<block type="math_number">undefined<field name="NUM">38200</field>undefined</block>undefined</value>undefined<statement name="DO">undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">587.33</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined<next>undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">349.23</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined</block>undefined</next>undefined</block>undefined</statement>undefined<next>undefined<block type="game_wait_ms">undefined<value name="DELAY">undefined<block type="math_number">undefined<field name="NUM">38400</field>undefined</block>undefined</value>undefined<statement name="DO">undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">130.81</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined</block>undefined</statement>undefined<next>undefined<block type="game_wait_ms">undefined<value name="DELAY">undefined<block type="math_number">undefined<field name="NUM">38800</field>undefined</block>undefined</value>undefined<statement name="DO">undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">207.65</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined<next>undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">622.25</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined<next>undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">415.3</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</statement>undefined<next>undefined<block type="game_wait_ms">undefined<value name="DELAY">undefined<block type="math_number">undefined<field name="NUM">39400</field>undefined</block>undefined</value>undefined<statement name="DO">undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">233.08</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined<next>undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">587.33</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined<next>undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">349.23</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</statement>undefined<next>undefined<block type="game_wait_ms">undefined<value name="DELAY">undefined<block type="math_number">undefined<field name="NUM">40000</field>undefined</block>undefined</value>undefined<statement name="DO">undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">261.63</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined<next>undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">523.25</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined<next>undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">329.63</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</statement>undefined<next>undefined<block type="game_wait_ms">undefined<value name="DELAY">undefined<block type="math_number">undefined<field name="NUM">40600</field>undefined</block>undefined</value>undefined<statement name="DO">undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">196</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined</block>undefined</statement>undefined<next>undefined<block type="game_wait_ms">undefined<value name="DELAY">undefined<block type="math_number">undefined<field name="NUM">40800</field>undefined</block>undefined</value>undefined<statement name="DO">undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">196</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined</block>undefined</statement>undefined<next>undefined<block type="game_wait_ms">undefined<value name="DELAY">undefined<block type="math_number">undefined<field name="NUM">41200</field>undefined</block>undefined</value>undefined<statement name="DO">undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">130.81</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined</block>undefined</statement>undefined<next>undefined<block type="game_wait_ms">undefined<value name="DELAY">undefined<block type="math_number">undefined<field name="NUM">41600</field>undefined</block>undefined</value>undefined<statement name="DO">undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">103.83</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined<next>undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">523.25</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined<next>undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">415.3</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</statement>undefined<next>undefined<block type="game_wait_ms">undefined<value name="DELAY">undefined<block type="math_number">undefined<field name="NUM">41800</field>undefined</block>undefined</value>undefined<statement name="DO">undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">523.25</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined<next>undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">415.3</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined</block>undefined</next>undefined</block>undefined</statement>undefined<next>undefined<block type="game_wait_ms">undefined<value name="DELAY">undefined<block type="math_number">undefined<field name="NUM">42200</field>undefined</block>undefined</value>undefined<statement name="DO">undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">155.56</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined<next>undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">523.25</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined<next>undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">415.3</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</statement>undefined<next>undefined<block type="game_wait_ms">undefined<value name="DELAY">undefined<block type="math_number">undefined<field name="NUM">42600</field>undefined</block>undefined</value>undefined<statement name="DO">undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">523.25</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined<next>undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">415.3</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined</block>undefined</next>undefined</block>undefined</statement>undefined<next>undefined<block type="game_wait_ms">undefined<value name="DELAY">undefined<block type="math_number">undefined<field name="NUM">42800</field>undefined</block>undefined</value>undefined<statement name="DO">undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">207.65</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined<next>undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">587.33</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined<next>undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">466.16</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</statement>undefined<next>undefined<block type="game_wait_ms">undefined<value name="DELAY">undefined<block type="math_number">undefined<field name="NUM">43200</field>undefined</block>undefined</value>undefined<statement name="DO">undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">196</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined<next>undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">659.26</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined<next>undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">392</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</statement>undefined<next>undefined<block type="game_wait_ms">undefined<value name="DELAY">undefined<block type="math_number">undefined<field name="NUM">43400</field>undefined</block>undefined</value>undefined<statement name="DO">undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">523.25</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined<next>undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">329.63</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined</block>undefined</next>undefined</block>undefined</statement>undefined<next>undefined<block type="game_wait_ms">undefined<value name="DELAY">undefined<block type="math_number">undefined<field name="NUM">43800</field>undefined</block>undefined</value>undefined<statement name="DO">undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">130.81</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined<next>undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">440</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined<next>undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">329.63</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</statement>undefined<next>undefined<block type="game_wait_ms">undefined<value name="DELAY">undefined<block type="math_number">undefined<field name="NUM">44000</field>undefined</block>undefined</value>undefined<statement name="DO">undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">392</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined<next>undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">261.63</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined</block>undefined</next>undefined</block>undefined</statement>undefined<next>undefined<block type="game_wait_ms">undefined<value name="DELAY">undefined<block type="math_number">undefined<field name="NUM">44400</field>undefined</block>undefined</value>undefined<statement name="DO">undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">98</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined</block>undefined</statement>undefined<next>undefined<block type="game_wait_ms">undefined<value name="DELAY">undefined<block type="math_number">undefined<field name="NUM">44800</field>undefined</block>undefined</value>undefined<statement name="DO">undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">103.83</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined<next>undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">523.25</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined<next>undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">415.3</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</statement>undefined<next>undefined<block type="game_wait_ms">undefined<value name="DELAY">undefined<block type="math_number">undefined<field name="NUM">45000</field>undefined</block>undefined</value>undefined<statement name="DO">undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">523.25</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined<next>undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">415.3</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined</block>undefined</next>undefined</block>undefined</statement>undefined<next>undefined<block type="game_wait_ms">undefined<value name="DELAY">undefined<block type="math_number">undefined<field name="NUM">45400</field>undefined</block>undefined</value>undefined<statement name="DO">undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">155.56</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined<next>undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">523.25</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined<next>undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">415.3</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</statement>undefined<next>undefined<block type="game_wait_ms">undefined<value name="DELAY">undefined<block type="math_number">undefined<field name="NUM">45800</field>undefined</block>undefined</value>undefined<statement name="DO">undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">523.25</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined<next>undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">415.3</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined</block>undefined</next>undefined</block>undefined</statement>undefined<next>undefined<block type="game_wait_ms">undefined<value name="DELAY">undefined<block type="math_number">undefined<field name="NUM">46000</field>undefined</block>undefined</value>undefined<statement name="DO">undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">207.65</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined<next>undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">587.33</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined<next>undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">466.16</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</statement>undefined<next>undefined<block type="game_wait_ms">undefined<value name="DELAY">undefined<block type="math_number">undefined<field name="NUM">46200</field>undefined</block>undefined</value>undefined<statement name="DO">undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">659.26</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined<next>undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">392</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined</block>undefined</next>undefined</block>undefined</statement>undefined<next>undefined<block type="game_wait_ms">undefined<value name="DELAY">undefined<block type="math_number">undefined<field name="NUM">46400</field>undefined</block>undefined</value>undefined<statement name="DO">undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">196</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined</block>undefined</statement>undefined<next>undefined<block type="game_wait_ms">undefined<value name="DELAY">undefined<block type="math_number">undefined<field name="NUM">47000</field>undefined</block>undefined</value>undefined<statement name="DO">undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">130.81</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined</block>undefined</statement>undefined<next>undefined<block type="game_wait_ms">undefined<value name="DELAY">undefined<block type="math_number">undefined<field name="NUM">47600</field>undefined</block>undefined</value>undefined<statement name="DO">undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">98</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined</block>undefined</statement>undefined<next>undefined<block type="game_wait_ms">undefined<value name="DELAY">undefined<block type="math_number">undefined<field name="NUM">48000</field>undefined</block>undefined</value>undefined<statement name="DO">undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">103.83</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined<next>undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">523.25</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined<next>undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">415.3</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</statement>undefined<next>undefined<block type="game_wait_ms">undefined<value name="DELAY">undefined<block type="math_number">undefined<field name="NUM">48200</field>undefined</block>undefined</value>undefined<statement name="DO">undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">523.25</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined<next>undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">415.3</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined</block>undefined</next>undefined</block>undefined</statement>undefined<next>undefined<block type="game_wait_ms">undefined<value name="DELAY">undefined<block type="math_number">undefined<field name="NUM">48600</field>undefined</block>undefined</value>undefined<statement name="DO">undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">155.56</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined<next>undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">523.25</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined<next>undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">415.3</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</statement>undefined<next>undefined<block type="game_wait_ms">undefined<value name="DELAY">undefined<block type="math_number">undefined<field name="NUM">49000</field>undefined</block>undefined</value>undefined<statement name="DO">undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">523.25</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined<next>undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">415.3</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined</block>undefined</next>undefined</block>undefined</statement>undefined<next>undefined<block type="game_wait_ms">undefined<value name="DELAY">undefined<block type="math_number">undefined<field name="NUM">49200</field>undefined</block>undefined</value>undefined<statement name="DO">undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">207.65</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined<next>undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">587.33</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined<next>undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">466.16</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</statement>undefined<next>undefined<block type="game_wait_ms">undefined<value name="DELAY">undefined<block type="math_number">undefined<field name="NUM">49600</field>undefined</block>undefined</value>undefined<statement name="DO">undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">196</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined<next>undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">659.26</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined<next>undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">392</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</statement>undefined<next>undefined<block type="game_wait_ms">undefined<value name="DELAY">undefined<block type="math_number">undefined<field name="NUM">49800</field>undefined</block>undefined</value>undefined<statement name="DO">undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">523.25</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined<next>undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">329.63</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined</block>undefined</next>undefined</block>undefined</statement>undefined<next>undefined<block type="game_wait_ms">undefined<value name="DELAY">undefined<block type="math_number">undefined<field name="NUM">50200</field>undefined</block>undefined</value>undefined<statement name="DO">undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">130.81</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined<next>undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">440</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined<next>undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">329.63</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</statement>undefined<next>undefined<block type="game_wait_ms">undefined<value name="DELAY">undefined<block type="math_number">undefined<field name="NUM">50400</field>undefined</block>undefined</value>undefined<statement name="DO">undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">392</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined<next>undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">261.63</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined</block>undefined</next>undefined</block>undefined</statement>undefined<next>undefined<block type="game_wait_ms">undefined<value name="DELAY">undefined<block type="math_number">undefined<field name="NUM">50800</field>undefined</block>undefined</value>undefined<statement name="DO">undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">98</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined</block>undefined</statement>undefined<next>undefined<block type="game_wait_ms">undefined<value name="DELAY">undefined<block type="math_number">undefined<field name="NUM">51200</field>undefined</block>undefined</value>undefined<statement name="DO">undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">146.83</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined<next>undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">659.26</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined<next>undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">369.99</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</statement>undefined<next>undefined<block type="game_wait_ms">undefined<value name="DELAY">undefined<block type="math_number">undefined<field name="NUM">51400</field>undefined</block>undefined</value>undefined<statement name="DO">undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">146.83</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined<next>undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">659.26</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined<next>undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">369.99</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</statement>undefined<next>undefined<block type="game_wait_ms">undefined<value name="DELAY">undefined<block type="math_number">undefined<field name="NUM">51800</field>undefined</block>undefined</value>undefined<statement name="DO">undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">146.83</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined<next>undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">659.26</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined<next>undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">369.99</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</statement>undefined<next>undefined<block type="game_wait_ms">undefined<value name="DELAY">undefined<block type="math_number">undefined<field name="NUM">52200</field>undefined</block>undefined</value>undefined<statement name="DO">undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">146.83</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined<next>undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">523.25</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined<next>undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">369.99</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</statement>undefined<next>undefined<block type="game_wait_ms">undefined<value name="DELAY">undefined<block type="math_number">undefined<field name="NUM">52400</field>undefined</block>undefined</value>undefined<statement name="DO">undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">146.83</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined<next>undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">659.26</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined<next>undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">369.99</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</statement>undefined<next>undefined<block type="game_wait_ms">undefined<value name="DELAY">undefined<block type="math_number">undefined<field name="NUM">52800</field>undefined</block>undefined</value>undefined<statement name="DO">undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">783.99</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined<next>undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">493.88</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined<next>undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">392</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</statement>undefined<next>undefined<block type="game_wait_ms">undefined<value name="DELAY">undefined<block type="math_number">undefined<field name="NUM">53000</field>undefined</block>undefined</value>undefined<statement name="DO">undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">49</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined</block>undefined</statement>undefined<next>undefined<block type="game_wait_ms">undefined<value name="DELAY">undefined<block type="math_number">undefined<field name="NUM">53200</field>undefined</block>undefined</value>undefined<statement name="DO">undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">55</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined</block>undefined</statement>undefined<next>undefined<block type="game_wait_ms">undefined<value name="DELAY">undefined<block type="math_number">undefined<field name="NUM">53500</field>undefined</block>undefined</value>undefined<statement name="DO">undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">55</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined</block>undefined</statement>undefined<next>undefined<block type="game_wait_ms">undefined<value name="DELAY">undefined<block type="math_number">undefined<field name="NUM">53700</field>undefined</block>undefined</value>undefined<statement name="DO">undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">55</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined</block>undefined</statement>undefined<next>undefined<block type="game_wait_ms">undefined<value name="DELAY">undefined<block type="math_number">undefined<field name="NUM">54000</field>undefined</block>undefined</value>undefined<statement name="DO">undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">49</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined</block>undefined</statement>undefined<next>undefined<block type="game_wait_ms">undefined<value name="DELAY">undefined<block type="math_number">undefined<field name="NUM">54200</field>undefined</block>undefined</value>undefined<statement name="DO">undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">61.74</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined</block>undefined</statement>undefined<next>undefined<block type="game_wait_ms">undefined<value name="DELAY">undefined<block type="math_number">undefined<field name="NUM">54500</field>undefined</block>undefined</value>undefined<statement name="DO">undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">61.74</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined</block>undefined</statement>undefined<next>undefined<block type="game_wait_ms">undefined<value name="DELAY">undefined<block type="math_number">undefined<field name="NUM">54700</field>undefined</block>undefined</value>undefined<statement name="DO">undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">61.74</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined</block>undefined</statement>undefined<next>undefined<block type="game_wait_ms">undefined<value name="DELAY">undefined<block type="math_number">undefined<field name="NUM">55000</field>undefined</block>undefined</value>undefined<statement name="DO">undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">49</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined</block>undefined</statement>undefined<next>undefined<block type="game_wait_ms">undefined<value name="DELAY">undefined<block type="math_number">undefined<field name="NUM">55200</field>undefined</block>undefined</value>undefined<statement name="DO">undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">65.41</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined</block>undefined</statement>undefined<next>undefined<block type="game_wait_ms">undefined<value name="DELAY">undefined<block type="math_number">undefined<field name="NUM">55500</field>undefined</block>undefined</value>undefined<statement name="DO">undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">65.41</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined</block>undefined</statement>undefined<next>undefined<block type="game_wait_ms">undefined<value name="DELAY">undefined<block type="math_number">undefined<field name="NUM">55700</field>undefined</block>undefined</value>undefined<statement name="DO">undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">65.41</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined</block>undefined</statement>undefined<next>undefined<block type="game_wait_ms">undefined<value name="DELAY">undefined<block type="math_number">undefined<field name="NUM">56100</field>undefined</block>undefined</value>undefined<statement name="DO">undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">73.42</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined</block>undefined</statement>undefined<next>undefined<block type="game_wait_ms">undefined<value name="DELAY">undefined<block type="math_number">undefined<field name="NUM">56400</field>undefined</block>undefined</value>undefined<statement name="DO">undefined<block type="sound_play">undefined<field name="WAVE">square</field>undefined<value name="FREQ">undefined<block type="math_number">undefined<field name="NUM">73.42</field>undefined</block>undefined</value>undefined<value name="DURATION">undefined<block type="math_number">undefined<field name="NUM">100</field>undefined</block>undefined</value>undefined</block>undefined</statement>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</next>undefined</block>undefined</next>
																																																																																																				</block>
																																																																																																			</next>
																																																																																																		</block>
																																																																																																	</next>
																																																																																																</block>
																																																																																															</next>
																																																																																														</block>
																																																																																													</next>
																																																																																												</block>
																																																																																											</next>
																																																																																										</block>
																																																																																									</next>
																																																																																								</block>
																																																																																							</next>
																																																																																						</block>
																																																																																					</next>
																																																																																				</block>
																																																																																			</next>
																																																																																		</block>
																																																																																	</next>
																																																																																</block>
																																																																															</next>
																																																																														</block>
																																																																													</next>
																																																																												</block>
																																																																											</next>
																																																																										</block>
																																																																									</next>
																																																																								</block>
																																																																							</next>
																																																																						</block>
																																																																					</next>
																																																																				</block>
																																																																			</next>
																																																																		</block>
																																																																	</next>
																																																																</block>
																																																															</next>
																																																														</block>
																																																													</next>
																																																												</block>
																																																											</next>
																																																										</block>
																																																									</next>
																																																								</block>
																																																							</next>
																																																						</block>
																																																					</next>
																																																				</block>
																																																			</next>
																																																		</block>
																																																	</next>
																																																</block>
																																															</next>
																																														</block>
																																													</next>
																																												</block>
																																											</next>
																																										</block>
																																									</next>
																																								</block>
																																							</next>
																																						</block>
																																					</next>
																																				</block>
																																			</next>
																																		</block>
																																	</next>
																																</block>
																															</next>
																														</block>
																													</next>
																												</block>
																											</next>
																										</block>
																									</next>
																								</block>
																							</next>
																						</block>
																					</next>
																				</block>
																			</next>
																		</block>
																	</next>
																</block>
															</next>
														</block>
													</next>
												</block>
											</next>
										</block>
									</next>
								</block>
							</next>
						</block>
					</next>
				</block>
			</next>
		</block>
	</next>
</block>
`;
