export interface Patient {
  id: number;
  active: boolean;
  mrn: string;
  given_name: string;
  family_name: string;
  middle_name?: string;
  gender: string;
  birth_date: string;
  nationality: string;
  national_id?: string;
  birth_reg_no?: string;
  unhcr_number?: string;
  camp_name?: string;
  block_number?: string;
  phone: string;
  email?: string;
  address_line1?: string;
  city?: string;
  country: string;
  photo_url?: string;
}

export interface Encounter {
  id: number;
  status: string;
  class: string;
  type?: string;
  patient_id: number;
  practitioner_id?: number;
  period_start: string;
  period_end?: string;
  reason?: string;
  diagnosis?: string;
  chief_complaint?: string;
}

export interface VitalSigns {
  id: number;
  encounter_id: number;
  patient_id: number;
  measured_at: string;
  systolic_bp?: number;
  diastolic_bp?: number;
  pulse_rate?: number;
  respiratory_rate?: number;
  temperature?: number;
  spo2?: number;
  weight?: number;
  height?: number;
  bmi?: number;
  pain_scale?: number;
  notes?: string;
}

export interface ClinicalNote {
  id: number;
  encounter_id: number;
  patient_id: number;
  note_type: string;
  subjective?: string;
  objective?: string;
  assessment?: string;
  plan?: string;
  note_date: string;
  status: string;
  signed_by?: number;
  signed_at?: string;
}

export interface Medication {
  id: number;
  name: string;
  generic_name?: string;
  brand_name?: string;
  form: string;
  strength: string;
  unit: string;
}

export interface Prescription {
  id: number;
  encounter_id: number;
  patient_id: number;
  medication_id: number;
  medication?: Medication;
  dosage: string;
  frequency: string;
  duration_days: number;
  instructions?: string;
  start_date: string;
  end_date?: string;
  status: string;
}

export interface LabTest {
  id: number;
  code: string;
  name: string;
  category: string;
  unit?: string;
  reference_range_min?: number;
  reference_range_max?: number;
}

export interface LabOrder {
  id: number;
  encounter_id: number;
  patient_id: number;
  order_date: string;
  status: string;
  priority: string;
  results?: LabResult[];
}

export interface LabResult {
  id: number;
  lab_order_id: number;
  lab_test_id: number;
  lab_test?: LabTest;
  value: string;
  numeric_value?: number;
  unit?: string;
  abnormal_flag?: string;
  result_date: string;
  status: string;
}

export interface Appointment {
  id: number;
  patient_id: number;
  patient?: Patient;
  practitioner_id?: number;
  appointment_type: string;
  status: string;
  scheduled_start: string;
  scheduled_end: string;
  reason?: string;
}
