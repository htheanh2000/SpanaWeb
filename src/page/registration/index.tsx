import './registration.scss';
import imgRegistration from '../../assets/image/registration.png';
import Input from '../../components/input';
import Button from '../../components/button';

const Registration = () => {
	const Stepper = (activeStep: number) => (
		<div className="stepper flex">
			<div className="containerStepper">
				<input type="radio" name="stepper" checked={activeStep === 1} className="mr-8" />
				<span className="checkmark"></span>
				<span className="circle"></span>
				<span className="divider"></span>
			</div>
			<div className="containerStepper">
				<input type="radio" name="stepper" checked={activeStep === 2} className="mr-8" />
				<span className="checkmark"></span>
				<span className="circle"></span>
				<span className="divider"></span>
			</div>
			<div className="containerStepper">
				<input type="radio" name="stepper" checked={activeStep === 3} className="mr-8" />
				<span className="checkmark"></span>
				<span className="circle"></span>
				<span className="divider"></span>
			</div>
			<div className="containerStepper">
				<input type="radio" name="stepper" checked={activeStep === 4} className="mr-8" />
				<span className="checkmark"></span>
				<span className="circle"></span>
			</div>
		</div>
	);
	return (
		<div className="registration d-flex">
			<div className="registration--left d-flex flex-column jc-evenly align-center">
				<div className="py-8">
					<p className="headline">Spana</p>
					<h3 className="h3 bold">Quản lý salon của bạn theo cách đơn giản nhất</h3>
				</div>

				<img className="icon" src={imgRegistration} alt="imgRegistration" />
			</div>
			<div className="registration--right px-8">
				{Stepper(1)}
				<h4 className="bold mb-4">Hãy cho mình biết thêm thông tin nhé</h4>
				<p className="body1 mb-8">
					Việc gì khó, có Spana. Hãy để Spana trở thành quản gia cho salon của bạn.
				</p>
				<Input
					className="mb-6"
					label="Salon của bạn tên gì ?"
					placeholder="Nhập tên salon của bạn"
					size="medium"
				/>
				<Input
					className="mb-6"
					label="Nhập slogan của Salon"
					placeholder="Nhập slogan của Salon"
					size="medium"
				/>
				<div className="mb-6">
					<p className="headline bold mb-4">Salon của bạn có bao nhiêu người ?</p>
					<div className="flex salonNumber">
						<Button size="medium" className="mr-8 active" state="secondary">
							1-10
						</Button>

						<Button size="medium" className="mr-8" state="secondary">
							10-20
						</Button>
						<Button size="medium" className="mr-8" state="secondary">
							20+
						</Button>
					</div>
				</div>
				<div className="mb-6">
					<p className="headline bold mb-4">Salon của bạn có bao nhiêu người ?</p>
					<div className="flex salonType ">
						<Button size="medium" className="mr-8 menu1" state="secondary">
							Spa
						</Button>

						<Button size="medium" className="mr-8 active menu1" state="secondary">
							Salon Tóc
						</Button>
						<Button size="medium" className="mr-8" state="secondary">
							Tiệm nail
						</Button>
						<Button size="medium" className="mr-8" state="secondary">
							Massage
						</Button>
						<Button size="medium" className="mr-8" state="secondary">
							Salon Xăm
						</Button>
					</div>
				</div>
				<Button size="medium" className="mr-8" state="primary">
					Tiếp tục
				</Button>
			</div>
		</div>
	);
};
export default Registration;
