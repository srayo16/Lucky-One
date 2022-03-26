import React from 'react';
import './Queans.css';
const Queans = () => {
    return (
        <div className='container shadow-lg p-3 mb-5 bg-body rounded handlepart'>
            <h1 className='text-center text-danger '>Que and for bonus</h1>
            <hr />
            <div className='mt-5'>
                <p className='fw-bold'>প্রশ্নঃ প্রপস এবং স্টেটের মধ্যে পার্থক্য কি?</p>
                <p className='fw-bold'>উত্তর:
                </p>
                <div className="container px-4">
                <div className="row gx-5">
                 <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                 <div className='border rounded p-3'>
                 <p className='fw-bold'>প্রপসঃ</p>
                 <p>
                <li>প্রপস ব্যবহার করা হয় ডাটা পাস করা জন্য, প্রপসের মাধ্যমে প্যারেন্ট থেকে চাইল্ডে ডাটা  পাস করা হয়।</li> 
                 <li>প্রপস অপরিবর্তনীয়।</li>
                <li>এতে রিয়েক্ট দ্রুত রেফারেন্স চেক করতে পারে।</li>
                 </p>
                 </div>
                     </div>
                     <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                        <div className='border rounded p-3'>
                            <p>সেস্টঃ</p>
                            <li>স্টেট টপ লেভেলের কম্পনেন্ট।</li>
                            <li>এটি পরিবর্তনযোগ্য।</li>
                            <li>এটি প্রপস ইন্সটেডের সাথে ডাটাকে নিচের দিকে পাস করে।</li>

                        </div>
                          </div>
                             </div>
                            </div>
            </div>
            <div className='mt-5 mb-3'>
                <p className='fw-bold'>প্রশ্নঃ ইউজসেস্ট কিভাবে কাজ করে?</p>
                <p><span className='fw-bold'>উত্তরঃ</span> রিয়েক্ট জেএসের এই ইউজস্টেট মূলত একটা হুক যা ফাংশনাল কম্পনেন্টগুলোর  সেস্ট ভেরিয়েবলগুলো নিজের মধ্যে রাখতে দেয়। এটাতে ইনিসিয়াল স্টেট পাস করা হলে  এটি বর্তমান স্টেট ভেলুর(value) সাথে একটি ভেরিয়েবলে রিটার্ন করবে। অতঃপর অপর একটি ফাংশন এই ভেলুটিকে(value) আপডেট করে। এভাবে ইউজসেস্ট কাজ করে।</p>
                
            </div>
        </div>
    );
};

export default Queans;