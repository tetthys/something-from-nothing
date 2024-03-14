const WhatIsRecommended = () => {
  return (
    <div className="mb-10 px-12 py-6 bg-cosmic-latte-600 rounded-sm">
      <h3 className="mb-6 text-4xl font-medium">What is recommeded</h3>
      <p className="text-xl leading-8">
        TDD can make you start from top. No need to have a headache with drawing
        static class modeling or dynamic instance modeling.
      </p>
      <div className="my-16 grid grid-cols-1 gap-y-16">
        <div className="flex flex-col gap-y-1">
          <h6 className="text-sm text-gray-500">example 1</h6>
          <p className="text-xl text-gray-500">
            new Lorem(new Ipsum()) returns blahblah
          </p>
        </div>
        <div className="flex flex-col gap-y-1">
          <h6 className="text-sm text-gray-500">example 2</h6>
          <p className="text-xl text-gray-500">
            new Bank()-&gt;deposit(new User()-&gt;balance())
          </p>
        </div>
      </div>
      <p className="text-xl leading-8">
        Start by imaging operations to instance. It results in a instance which
        have clean interface.
      </p>
    </div>
  );
};

export default WhatIsRecommended;
